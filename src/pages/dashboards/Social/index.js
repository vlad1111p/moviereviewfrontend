import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import Timeline from "./Timeline";
import User from "./User";
import Following from "./Following";
import Activities from "./Activities";
import MoviesAll from "../../../fetchClient/moviesAll";

const Social = () => (
  <React.Fragment>
    <Helmet title="Social Dashboard" />
    <Container className="p-0">
      <Row>
          <MoviesAll/>
      </Row>
    </Container>
  </React.Fragment>
);

export default Social;
