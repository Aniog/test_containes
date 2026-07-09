import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/microcosmos/Hero.jsx';
import Intro from '@/components/microcosmos/Intro.jsx';
import Worlds from '@/components/microcosmos/Worlds.jsx';
import Banner from '@/components/microcosmos/Banner.jsx';
import Gallery from '@/components/microcosmos/Gallery.jsx';
import Footer from '@/components/microcosmos/Footer.jsx';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-ink text-slate-200">
      <Hero />
      <Intro />
      <Worlds />
      <Banner />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
