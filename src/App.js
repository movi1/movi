import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
