import fetch from "unfetch";

export const getAllUsers = () => fetch('/users');

export const getAllMovies = () => fetch('/movies')
