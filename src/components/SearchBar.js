// import * as React from 'react';
// import SearchBar from '@mui/material/SearchBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// const SearchBar= () => {
//     const { searchMovies } = useMovie();
//     const [query, setQuery] = useState('');
  
//     const handleSearch = () => {
//       if (query.trim()) {
//         searchMovies(query);
//       }
//     };
  
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
//         <TextField
//           label="Search Movies"
//           variant="outlined"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//           style={{ width: '300px' }}
//         />
//         <IconButton onClick={handleSearch}>
//           <SearchIcon />
//         </IconButton>
//       </div>
//     );
//   };
  
//   export default SearchBar;