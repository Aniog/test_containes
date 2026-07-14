import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCReelRow from './UGCReelRow';
import CategoryTiles from './CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}