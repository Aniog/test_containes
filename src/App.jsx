import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Stats from './components/Stats';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Navbar />
      <Hero />
      <Products />
      <Stats />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
