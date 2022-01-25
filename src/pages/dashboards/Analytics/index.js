import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";


import MoviesByName from "../../../fetchClient/moviesByName";


const Analytics = () => (
  <React.Fragment>
    <Helmet title="Analytics Dashboard" />
    <Container className="container-lg" >
      <Row>

        <MoviesByName/>
      </Row>
    </Container>
  </React.Fragment>
);

export default Analytics;
