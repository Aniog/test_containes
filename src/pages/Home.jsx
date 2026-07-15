import React, { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero.jsx';
import TrustBar from '../components/home/TrustBar.jsx';
import Bestsellers from '../components/home/Bestsellers.jsx';
import UGCReel from '../components/home/UGCReel.jsx';
import CategoryTiles from '../components/home/CategoryTiles.jsx';
import BrandStory from '../components/home/BrandStory.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="animate-in fade-in duration-1000">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />

      {/* Hidden static images for pre-fetch and build resolution */}
      <div className="hidden" aria-hidden="true">
        {/* Bestsellers: Main & Hover */}
        <img data-strk-img-id="product-img-1" data-strk-img="Vivid Aura Jewels gold jewelry earring" />
        <img data-strk-img-id="product-img-hover-1" data-strk-img="Vivid Aura Jewels worn on model ear" />
        <img data-strk-img-id="product-img-2" data-strk-img="Majestic Flora Nectar gold jewelry necklace" />
        <img data-strk-img-id="product-img-hover-2" data-strk-img="Majestic Flora Nectar worn on model neck" />
        <img data-strk-img-id="product-img-3" data-strk-img="Golden Sphere Huggies gold jewelry earring" />
        <img data-strk-img-id="product-img-hover-3" data-strk-img="Golden Sphere Huggies worn on model ear" />
        <img data-strk-img-id="product-img-4" data-strk-img="Amber Lace Earrings gold jewelry earring" />
        <img data-strk-img-id="product-img-hover-4" data-strk-img="Amber Lace Earrings worn on model ear" />
        <img data-strk-img-id="product-img-5" data-strk-img="Royal Heirloom Set gold jewelry set gift box" />
        <img data-strk-img-id="product-img-hover-5" data-strk-img="Royal Heirloom Set worn on model pieces" />

        {/* Categories */}
        <img data-strk-img-id="cat-bg-0" data-strk-img="Earrings gold jewelry luxury backdrop" />
        <img data-strk-img-id="cat-bg-1" data-strk-img="Necklaces gold jewelry luxury backdrop" />
        <img data-strk-img-id="cat-bg-2" data-strk-img="Huggies gold jewelry luxury backdrop" />

        {/* Hero */}
        <img data-strk-img-id="hero-bg-main" data-strk-img="Crafted to be Treasured gold jewelry model editorial" />

        {/* UGC Reel */}
        <img data-strk-img-id="ugc-img-1" data-strk-img="ugc jewelry worn model 1" />
        <img data-strk-img-id="ugc-img-2" data-strk-img="ugc jewelry worn model 2" />
        <img data-strk-img-id="ugc-img-3" data-strk-img="ugc jewelry worn model 3" />
        <img data-strk-img-id="ugc-img-4" data-strk-img="ugc jewelry worn model 4" />
        <img data-strk-img-id="ugc-img-5" data-strk-img="ugc jewelry worn model 5" />
        <img data-strk-img-id="ugc-img-6" data-strk-img="ugc jewelry worn model 6" />

        {/* Brand Story */}
        <img data-strk-img-id="brand-story-img" data-strk-img="Velmora fine jewelry craftsmanship detail" />
      </div>
    </div>
  );
};

export default Home;
