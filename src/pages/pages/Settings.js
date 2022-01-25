import React from "react";
import {Helmet} from "react-helmet-async";
import {Button, Card, Col, Container, Form, ListGroup, Row,} from "react-bootstrap";
import {fetchUserChangePicture} from "../../fetchClient/fetchUserChangePicture";
import AuthenticationService from "../../components/auth/service/AuthenticationService";
import { useFormik} from "formik";

const Navigation = () => (
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Profile Settings
        </Card.Title>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item tag="a" href="#" action active>
          Account
        </ListGroup.Item>

        <ListGroup.Item tag="a" href="#" action>
          Delete account{" "}
        </ListGroup.Item>
      </ListGroup>
    </Card>
);


const PublicInfo = () => {

    const formik = useFormik({
        initialValues: {
            inputBio: " ",

        },
        onSubmit(values) {
            console.log(values)
            AuthenticationService.setBio(values);
        },
    })

    return(
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Public info
        </Card.Title>
      </Card.Header>
      <Card.Body>

          <Form onSubmit={formik.handleSubmit}>
            <Row>
              <Col md="8">


                  <Form.Label htmlFor="inputBio">Biography</Form.Label>
                  <Form.Control
                      as="textarea"
                      rows="2"
                      name="inputBio"
                      id="inputBio"
                      placeholder="Tell something about yourself"
                      value={formik.values.inputBio}
                      onChange={formik.handleChange}
                  />

              </Col>
              <Col md="4">

                {fetchUserChangePicture()}

              </Col>
            </Row>

            <Button type="submit" variant="primary">Save changes</Button>
          </Form>


      </Card.Body>
    </Card>
);
}
const PrivateInfo = () => {

    const formik = useFormik({
        initialValues: {
            firstName: " ",
            lastName: " ",
        },
        onSubmit(values) {
            console.log(values)
            AuthenticationService.setOthers(values);
        },
    })
    return(
    <Card>
      <Card.Header>
        <Card.Title tag="h5" className="mb-0">
          Private info
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="firstName">First name</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="lastName">Last name</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" variant="primary">Save changes</Button>
        </Form>
      </Card.Body>
    </Card>
);}

const Settings = () => (
    <React.Fragment>
      <Helmet title="Settings"/>
      <Container fluid className="p-0">
        <h1 className="h3 mb-3">Settings</h1>

        <Row>
          <Col md="3" xl="2">
            <Navigation/>
          </Col>
          <Col md="9" xl="10">
            <PublicInfo/>
            <PrivateInfo/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
);

export default Settings;
