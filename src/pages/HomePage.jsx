import React from 'react';
import { HeroSection, TrustBar } from '@/components/home/HeroSection';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCSection from '@/components/home/UGCSection';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
