import {Component} from "react";
import AuthenticationService from "../components/auth/service/AuthenticationService";
import {Button, Card, Col, Row} from "react-bootstrap";
import * as React from "react";
import {useHistory, useNavigate} from "react-router-dom";

const MoviesByName =()=> {
    const navigate = useNavigate();





        let movies=AuthenticationService.getCurrentQueriedMovies();
        // let history = useHistory();


        function allthemovies() {
            const goToMovie=async (movieId) => {
                console.log(movieId)
                await AuthenticationService.findMovieById(movieId);
                navigate("/saas")
            }
            return movies.map((movie, id)=>{
                    return(

                        <Col md="6" lg="4" key={id}>
                            <Card>
                                <Card.Img width="10%" height="30%" src={movie.movieProfileImageLink} alt="couldn't find image" />
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
                                    <Card.Link onClick={()=>goToMovie(movie.id)} >write review</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            )
        }
        return (

            <Row>
                {allthemovies()}
            </Row>


        );
    }



export default MoviesByName;
