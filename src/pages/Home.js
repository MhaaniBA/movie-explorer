// import React from 'react';
// import { useMovie } from '../context/MovieContext';
// import SearchBar from '../components/SearchBar';
// import MovieGrid from '../components/MovieGrid';
// import MovieDetails from '../components/MovieDetails';

// const Home = () => {
//   const { searchResults, trendingMovies, lastSearch } = useMovie();

//   return (
//     <div>
//       <SearchBar />
//       <h2 style={{ textAlign: 'center' }}>
//         {lastSearch ? `Results for "${lastSearch}"` : 'Trending Movies'}
//       </h2>
//       <MovieGrid movies={lastSearch ? searchResults : trendingMovies} />
//       <MovieDetails />
//     </div>
//   );
// };

// // export default Home;
