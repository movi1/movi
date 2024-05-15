import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
