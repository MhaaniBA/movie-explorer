import React from "react";
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MovieGrid = () =>{
    <Grid container justifyContent="center">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </Grid>
}

export default MovieGrid;

