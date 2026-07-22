import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCReel from './UGCReel';
import CategoryTiles from './CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

const Homepage = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Homepage;
