import { createTheme, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import Products from './components/Products';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600]
      }
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'Raleway',
        'Poppins',
        '"Open Sans"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box sx={{mt: 8}} id="mainContainer">
        <Home name="home"/>
        <Products name="products"/>
        <Team name="team"/>
        <Testimonials name="testimonials"/>
        <Pricing name="pricing"/>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
