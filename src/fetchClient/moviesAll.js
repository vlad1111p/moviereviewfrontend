import {getAllMovies} from "./client";
import * as React from 'react';
import {Component} from "react";
import {Card, Col, Row} from "react-bootstrap";
import unsplash1 from "../assets/img/photos/unsplash-1.jpg";


class MoviesAll extends Component{

    state ={
        movies:[]
    }
    componentDidMount ()  {
        this.fetchMovies();
    }
    fetchMovies = () => getAllMovies()
        .then(res=> res.json()
            .then(movies => {
        console.log(movies);
        this.setState({movies: movies});
    }));
    render(){
        const {movies}=this.state;
        function allthemovies() {
            return movies.map((movie, id)=>{
                    return(

                            <Col md="6" lg="4">
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
}}

export default MoviesAll;
