import React, { useEffect, useRef } from 'react';
import Hero from '@/components/home/Hero.jsx';
import TrustBar from '@/components/home/TrustBar.jsx';
import Bestsellers from '@/components/home/Bestsellers.jsx';
import ReelSection from '@/components/home/ReelSection.jsx';
import CategoryTiles from '@/components/home/CategoryTiles.jsx';
import BrandStory from '@/components/home/BrandStory.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Newsletter from '@/components/home/Newsletter.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = ({ addToCart }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensuring images are loaded after mounting
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers addToCart={addToCart} />
      <CategoryTiles />
      <ReelSection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
EOF > src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import Hero from '@/components/home/Hero.jsx';
import TrustBar from '@/components/home/TrustBar.jsx';
import Bestsellers from '@/components/home/Bestsellers.jsx';
import ReelSection from '@/components/home/ReelSection.jsx';
import CategoryTiles from '@/components/home/CategoryTiles.jsx';
import BrandStory from '@/components/home/BrandStory.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Newsletter from '@/components/home/Newsletter.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = ({ addToCart }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensuring images are loaded after mounting
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      <Bestsellers addToCart={addToCart} />
      <CategoryTiles />
      <ReelSection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
