import axios from "axios";
import {getAllMovies} from "./client";
import * as React from 'react';
import {Component} from "react";


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
                        <div key={id}>

                            <h2>{movie.id}</h2>
                            <h2>{movie.name}</h2>
                            <img className="photo" src={movie.movieProfileImageLink} />
                        </div>)
                }
            )
        }

        return (
        <div className="App">

            {allthemovies()}
        </div>
    );
}}

export default MoviesAll;
