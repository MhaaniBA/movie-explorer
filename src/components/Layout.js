import React,{Component} from 'react';
import { ThemeProvider ,createTheme  } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SearchSuggestion from '../components/SearchMoviesSuggestion';
const darkTheme = createTheme({
    palette: {
        mode:"dark"
    }
})
const Layout = ({children}) => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <LayoutWrapper>
          <div className='header'></div>
          <SearchSuggestion/>

        </LayoutWrapper>  
        {children}
    </ThemeProvider>
  );
};

export default Layout;
