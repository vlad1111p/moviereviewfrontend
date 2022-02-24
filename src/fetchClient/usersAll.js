import axios from "axios";
import React, {Component, useCallback, useEffect, useState} from "react";
import {useDropzone} from 'react-dropzone';
import {getAllUsers} from "./client";
import {Card} from "react-bootstrap";

const UserProfiles = () => {

    const [UserProfiles, setUserProfiles] = useState([]);
    const fetchUserProfiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
            console.log(res)
            setUserProfiles(res.data);
        });

    }


    useEffect(() => {
        fetchUserProfiles();
    }, []);
    return UserProfiles.map((userProfile, index) => {
        return (

            <Card style={{ width: '18rem' }}>
                {userProfile.userProfileId ?
                    (<Card.Img width="10" height="30"
                               src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                               alt="couldn't find image"/>)
                    : null}
                <Card.Title tag="h5" className="mb-0">
                    {userProfile.firstName}
                </Card.Title>
                <Card.Text>
                {userProfile.bio}
                </Card.Text>
                <MyDropzone {...userProfile}/>
                <br/>

            </Card>
        )
    })
};

function MyDropzone({userProfileId}) {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append("file", file);
        axios.post(`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then(() => {
            console.log("file uploaded successfully")
        }).catch(err => {
            console.log(err);
        })
        console.log(file);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

class UsersAll extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => getAllUsers()
        .then(res => res.json()
            .then(users => {
                console.log(users);
                this.setState({users});
            }));

    render() {
        const {users} = this.state;

        function alltheusers() {
            return users.map((user, id) => {
                    return (
                        <div key={id}>
                            <h2>{user.id}</h2>
                            <h2>{user.firstName}</h2>
                        </div>)
                }
            )
        }

        return (
            <div className="App">
                <UserProfiles/>
            </div>
        );
    }
}

export default UsersAll;
