import React, {useEffect, useState} from "react";
import axios from "axios";
import AuthenticationService from "../components/auth/service/AuthenticationService";

export const UserProfile = (width,height) => {
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
            if(!isNaN(width)&&!isNaN(height)){
            return (<img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                         alt="The video was removed from the source" className="img-fluid rounded-circle mb-2"
                         width={width}
                         height={height}/>)}
                         else{
               return (<img src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileId}/image/download`}
                      alt="The video was removed from the source" className="img-fluid rounded-circle mb-2"
                      width="64"
                      height="80"/>)
            }
    })
};
