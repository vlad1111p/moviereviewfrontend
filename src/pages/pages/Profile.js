import React from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

import {Card, Col, Container, Row} from "react-bootstrap";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";

import AuthenticationService from "../../components/auth/service/AuthenticationService";
import {UserProfile} from "../../fetchClient/fetchUser";

const ProfileDetails = () => {
    const currentWholeUser = AuthenticationService.getCurrentWholeUser();


    function allTheMessages() {


    }

    return (
        <Card>
            <Card.Header>
                <Card.Title tag="h5" className="mb-0">
                    Profile Details
                </Card.Title>
            </Card.Header>
            <Card.Body className="text-center">

                {UserProfile(128,128)}
                {/*<img*/}
                {/*    src={}*/}
                {/*    alt="Stacie Hall"*/}
                {/*    className="img-fluid rounded-circle mb-2"*/}
                {/*    width="128"*/}
                {/*    height="128"*/}
                {/*/>*/}
                <Card.Title tag="h5" className="mb-0">
                    {currentWholeUser.firstName + " " + currentWholeUser.lastName}
                </Card.Title>


            </Card.Body>

            <hr className="my-0"/>

            <hr className="my-0"/>
            <Card.Body>
                <Card.Title tag="h5">About</Card.Title>
                {currentWholeUser.bio}
            </Card.Body>
            <hr className="my-0"/>
            <Card.Body>
                <Card.Title tag="h5">Social Media</Card.Title>

                <ul className="list-unstyled mb-0">

                    <li className="mb-1">
                        <FontAwesomeIcon icon={faTwitter} fixedWidth className="me-1"/>
                        <Link to="/dashboard/default">Twitter</Link>
                    </li>
                    <li className="mb-1">
                        <FontAwesomeIcon icon={faFacebook} fixedWidth className="me-1"/>
                        <Link to="/dashboard/default">Facebook</Link>
                    </li>
                    <li className="mb-1">
                        <FontAwesomeIcon icon={faInstagram} fixedWidth className="me-1"/>
                        <Link to="/dashboard/default">Instagram</Link>
                    </li>
                    <li className="mb-1">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth className="me-1"/>
                        <Link to="/dashboard/default">LinkedIn</Link>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    );
};

// function allTheMessages() {
//
//   const currentWholeUser = AuthenticationService.getCurrentWholeUser();
//   const currentUserMessage = currentWholeUser.messages;
//
//   return currentUserMessage.map((message, id)=>{
//         return(
//             <div key={id}>
//               <h2>{message.id}</h2>
//               <h2>{message.content}</h2>
//             </div>)
//       }
//   )
// }
const currentWholeUser = AuthenticationService.getCurrentWholeUser()
let currentUserMessage = currentWholeUser.messages;
function displayMessage(){
    return currentUserMessage.map((message, id)=>{
            return(
                <div className="border text-sm text-muted p-2 mt-1" key={id}>
                    {message}
                </div>)
        }
    )
}
const Activities = () => (
    <Card>
        <Card.Header>
            <Card.Title tag="h5" className="mb-0">
                Reviews / Comments
            </Card.Title>
        </Card.Header>
        <Card.Body>
                {displayMessage()}

        </Card.Body>
    </Card>
);

const Profile = () => (
    <React.Fragment>
        <Helmet title="Profile"/>
        <Container fluid className="p-0">
            <h1 className="h3 mb-3">Profile</h1>

            <Row>
                <Col md="4" xl="3">
                    <ProfileDetails/>
                </Col>
                <Col md="8" xl="9">
                    <Activities/>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);

export default Profile;
