import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import MoviesAll from "../../../fetchClient/moviesAll";

const Social = () => (
  <React.Fragment>
    <Helmet title="Social Dashboard" />
    <Container className="container-lg" >
      <Row>
          <MoviesAll/>
      </Row>
    </Container>
  </React.Fragment>
);

export default Social;
