import React from 'react';
import './App.css';
import { About } from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import { Header } from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
