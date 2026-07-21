import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import TrustBar from '../components/home/TrustBar.jsx';
import BestsellersSection from '../components/home/BestsellersSection.jsx';
import UGCReel from '../components/home/UGCReel.jsx';
import CategoryTiles from '../components/home/CategoryTiles.jsx';
import BrandStory from '../components/home/BrandStory.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
