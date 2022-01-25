import axios from "axios";
import {Redirect, useNavigate} from "react-router-dom";


class AuthenticationService {

    signin = (username, password) => {
        return axios.post("/api/auth/signin", {username, password})
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }
    getCurrentWholeUserUpdate = () => {

        if(this.getCurrentUser()){
        const currentUser = this.getCurrentUser();

        let payload = { username: currentUser.username, accessToken: currentUser.accessToken};
        return axios.post("/api/auth/currentuser", payload)
            .then(response => {
                localStorage.setItem("currentWholeUser", JSON.stringify(response.data));
                return response.data;
            })
            .catch(err => {
                console.log(err);
                throw err;
            });}
    }



    signOut() {
        localStorage.removeItem("user");
    }

    register = async(firstname, lastname, email, password) => {
        let payload = {firstname: firstname, lastname: lastname, email: email, password: password};
        return axios.post("/api/auth/signup", payload);
    }

    getCurrentWholeUser =()=>{
        this.getCurrentWholeUserUpdate();
        return JSON.parse(localStorage.getItem('currentWholeUser'));
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    setBio =(value)=>{
        const userDTO = this.getCurrentWholeUser();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content:value.inputBio, email:userDTO.email })
        };

        const payload={content:value.inputBio, email:userDTO.email}
        return axios.post("/setbio", payload);
    }

    setOthers=(values)=>{
        const userDTO = this.getCurrentWholeUser();

        userDTO.firstName=values.firstName;
        userDTO.lastName=values.lastName;

        return axios.post("/setothers", userDTO);

    }


    findMovieByName(values) {

        return axios.post("/findMovies", {content:values.movieName , email:""}).then(response => {
            if (response.data) {
                localStorage.setItem("moviesByName", JSON.stringify(response.data));

            }


            return response.data;
        })
            .catch(err => {
                throw err;
            });

    }

    findMovieById(values) {

        return axios.post("/findmoviebyid", {content:values , email:""}).then(response => {
            if (response.data) {
                localStorage.setItem("moviesById", JSON.stringify(response.data));

            }
            return response.data;
        })
            .catch(err => {
                console.log(err);
                throw err;
            });

    }
    getCurrentQueriedMoviesById() {
        return JSON.parse(localStorage.getItem('moviesById'));
    }

    getCurrentQueriedMovies() {
        return JSON.parse(localStorage.getItem('moviesByName'));
    }

    setMovieDescription(values, movieid) {
        console.log({content:values.inputBio , email:movieid.toString()});
        return axios.post("/setmoviedescription", {content:values.inputBio , email:movieid.toString()});


    }

    getMovieMessage(values, movieid) {

        return axios.post("/findmoviemessages", {content:movieid.toString() , email:""}).then(response => {
            if (response.data) {
                localStorage.setItem("moviesMessages", JSON.stringify(response.data));
            }
            return response.data;
        })
            .catch(err => {
                console.log(err);
                throw err;
            });

    }

    getCurrentCurrentMovieMessage(movieid) {
        this.getMovieMessage("",movieid);
        return JSON.parse(localStorage.getItem('moviesMessages'));
    }

    createNewMessage(content, movieid){


        return axios.post("/createmessage", {content:content ,
            content1:movieid.toString() ,
            content2:this.getCurrentWholeUser().id.toString()
        });


    }

    async findUserByEmail(values) {
        
    }
}






export default new AuthenticationService();


// getUserMessageList =()=>{
//     this.getUserMessages();
//     return JSON.parse(localStorage.getItem('getUserMessages'));
// }
//
// getUserMessages=( email)=>{
//     return axios.post("/getusermessages", email)
//         .then(response => {
//             console.log(JSON.stringify(response.data));
//             localStorage.setItem("getUserMessages", JSON.stringify(response.data));
//             return response.data;
//         })
//         .catch(err => {
//             console.log(err);
//             throw err;
//         });
//
// }
