import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import TrustBar from '../components/home/TrustBar.jsx';
import Bestsellers from '../components/home/Bestsellers.jsx';
import UGCRow from '../components/home/UGCRow.jsx';
import CategoryTiles from '../components/home/CategoryTiles.jsx';
import BrandStory from '../components/home/BrandStory.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}