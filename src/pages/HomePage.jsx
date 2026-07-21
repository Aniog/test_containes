import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCReel from '../components/UGCReel';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}