import React from 'react';
import Layout from './Layout';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Microscopy from './components/sections/Microscopy';
import Tardigrades from './components/sections/Tardigrades';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Microscopy />
      <Tardigrades />
      <Footer />
    </Layout>
  );
}

export default App;

