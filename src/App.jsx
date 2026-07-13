import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import FeaturedWorlds from './components/FeaturedWorlds';
import DidYouKnow from './components/DidYouKnow';
import ExploreSection from './components/ExploreSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <Introduction />
      <Gallery />
      <FeaturedWorlds />
      <DidYouKnow />
      <ExploreSection />
      <Footer />
    </div>
  );
}

export default App;

