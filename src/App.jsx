import React, { useEffect } from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';

AOS.init();

function App() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
      {/* <Preloader /> */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Box >
          <Header />
        </Box>
        <Box className="animate__animated animate__fadeIn">
          <Title />
        </Box>
        {/* <Footer /> */}
      </Container>
    </React.Fragment>
  );
}

export default App;
