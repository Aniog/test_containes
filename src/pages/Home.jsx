import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import ReelStrip from '@/components/home/ReelStrip';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <ReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
