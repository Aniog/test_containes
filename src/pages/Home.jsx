import React from 'react';
import HeroSection from '@/components/HeroSection.jsx';
import TrustBar from '@/components/TrustBar.jsx';
import BestsellersGrid from '@/components/BestsellersGrid.jsx';
import UGCStrip from '@/components/UGCStrip.jsx';
import CategoryTiles from '@/components/CategoryTiles.jsx';
import BrandStory from '@/components/BrandStory.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import Newsletter from '@/components/Newsletter.jsx';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UGCStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}