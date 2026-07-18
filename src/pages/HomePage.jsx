import React from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Bestsellers from '../components/sections/Bestsellers';
import UGCSection from '../components/sections/UGCSection';
import CategoryTiles from '../components/sections/CategoryTiles';
import BrandStory from '../components/sections/BrandStory';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
