import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ updated import
import App from './App';
import { MovieProvider } from './context/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ createRoot
root.render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
