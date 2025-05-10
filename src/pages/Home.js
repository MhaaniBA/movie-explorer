import React from 'react';
import { useMovie } from '../context/MovieContext';
import AppBar from '../components/AppBar';  // Fixed casing to match the file name


const Home = () => {
  const { searchResults, trendingMovies, lastSearch } = useMovie();

  return (
    <div>
      <Appbar />
      <h2 style={{ textAlign: 'center' }}>
        {lastSearch ? `Results for "${lastSearch}"` : 'Trending Movies'}
      </h2>
      <MovieGrid movies={lastSearch ? searchResults : trendingMovies} />
      <MovieDetails />
    </div>
  );
};

// export default Home;
