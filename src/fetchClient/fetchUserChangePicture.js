import React, {Component, useCallback, useEffect, useState} from "react";
import axios from "axios";
import AuthenticationService from "../components/auth/service/AuthenticationService";
import {useDropzone} from "react-dropzone";
import {getAllUsers} from "./client";

const UserProfileChangePicture = () => {
    const currentWholeUser = AuthenticationService.getCurrentWholeUser();
    const [UserProfiles, setUserProfiles] = useState([]);
    const fetchUserProfiles = () => {
        axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
            setUserProfiles(res.data);
        });

    }


    useEffect(() => {
        fetchUserProfiles();
    }, []);
    return UserProfiles.map((userProfile, index) => {
        if (userProfile.id === currentWholeUser.id)
            return (<div><img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                      alt="The video was removed from the source" className="img-fluid rounded-circle mb-2"
                      width="120" height="120"/>
                       <MyDropzone {...userProfile}/>
               </div>
               )
            }


    )
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

export const fetchUserChangePicture =()=>{
    return (
            <div className="App">
                <UserProfileChangePicture/>
            </div>
        );
    }

