import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";


import UsersAll from "../../../fetchClient/usersAll";

const Crypto = () => (
  <React.Fragment>
    <Helmet title="Crypto Dashboard" />
    <Container fluid className="p-0">
        <Container fluid className="p-0">

            <UsersAll/>

        </Container>
    </Container>
  </React.Fragment>
);

export default Crypto;
