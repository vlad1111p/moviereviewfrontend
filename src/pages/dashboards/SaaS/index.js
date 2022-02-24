import React, {useState} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import AuthenticationService from "../../../components/auth/service/AuthenticationService";
import {Formik, useFormik as fmik} from "formik";

const SaaS = () => {

    const movie = AuthenticationService.getCurrentQueriedMoviesById();


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

    function displayMessage() {

        return AuthenticationService.getCurrentCurrentMovieMessage(movie.id).map((content) => {
                return (
                    <div className="border text-sm text-muted p-2 mt-1" key={content.id}>
                        {content.content}
                    </div>)
            }
        )
    }

    function getForm() {
        const formik = fmik({
            enableReinitialize: true,
            initialValues: {
                inputBio: " ",
            },
            async onSubmit(values) {
                await AuthenticationService.setMovieDescription(values,movie.id);
            },
        });

        return (<Row>
                <Col md="8">

                    <Form onSubmit={formik.handleSubmit}>
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
                        <Button type="submit" variant="primary">Save changes</Button>
                    </Form>
                </Col>

            </Row>

        )
            ;
    }

    function GetForm1() {
        const formik = fmik({
            initialValues: {
                content: " "
            },
             onSubmit(values) {
                console.log(values.content);
                AuthenticationService.createNewMessage(values.content, movie.id.toString());
            },
        });

        return (
            <Form onSubmit={formik.handleSubmit}>
            <Form.Label htmlFor="inputContent">Review</Form.Label>
            <Form.Control
                as="textarea"
                rows="2"
                name="content"
                id="content"
                placeholder="Tell something about yourself"
                value={formik.values.inputBio}
                onChange={formik.handleChange}
            />
                <Button type="submit">Save changes</Button>
        </Form>
        );

    }

    return (
        <React.Fragment>

            <Container fluid className="p-0">
                <Row>

                    <Col md="6" lg="4" key={movie.id}>
                        <Card>
                            <Card.Img width="10%" height="30%" src={movie.movieProfileImageLink}
                                      alt="couldn't find image"/>
                            <Card.Header>
                                <Card.Title tag="h5" className="mb-0">
                                    {movie.name}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {movie.description}
                                </Card.Text>
                                <Card.Link href={movie.description}>movie link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="6" lg="4">
                        <Card>
                            <Card.Header>
                                <Card.Title tag="h5" className="mb-0">
                                    Movie description
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>

                                {getForm()}


                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="8" xl="9">
                        <Card>
                            <Card.Header>
                                <Card.Title tag="h5" className="mb-0">
                                    Write a Review
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>

                                <Row>
                                    {GetForm1()}

                                </Row>


                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="8" xl="9">
                        <Activities/>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
    );
}


export default SaaS;
