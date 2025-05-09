import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesMovies from './pages/FavoritesMovies';
import { Searchbar, Toolbar, Typography, Button } from '@mui/material';

function App   () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesMovies/>} />
      </Routes>
    </BrowserRouter>
  );
}
  


export default App;
