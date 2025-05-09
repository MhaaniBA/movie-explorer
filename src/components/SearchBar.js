import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from './components/AppBar';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),
}));

function SearchBar() {
  return ("hi");
}

export default SearchBar;