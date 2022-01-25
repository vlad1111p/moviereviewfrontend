import {Component} from "react";
import AuthenticationService from "../components/auth/service/AuthenticationService";
import {Card, Col, Row} from "react-bootstrap";
import * as React from "react";

class MoviesById extends Component {

    state ={
        movies:[],
        id:1
    }
    componentDidMount ()  {
    }

    render(){
        let {movies}=this.state;
        movies=AuthenticationService.getCurrentQueriedMoviesById(this.state.id);
        function allthemovies() {

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


}
export default MoviesById;
