import React from 'react';
import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import BestsellersGrid from '../components/home/BestsellersGrid';
import UGCReelStrip from '../components/home/UGCReelStrip';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <HomeHero />
      <TrustBar />
      <BestsellersGrid />
      <UGCReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
