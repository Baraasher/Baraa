import { useState } from 'react'
import './App.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/header/header';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from './components/Title/Title';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
AOS.init();
function App() {
  const [count, setCount] = useState(0)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ minHeight: '100vh' }} maxWidth="md">
        <Box >
          <Header />
          <Title />
          <Footer />
        </Box>
      </Container>
    </React.Fragment>
  )
}
export default App
