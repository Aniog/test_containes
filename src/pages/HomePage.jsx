import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersSection from '@/components/home/BestsellersSection';
import UGCSection from '@/components/home/UGCSection';
import CategorySection from '@/components/home/CategorySection';
import BrandStorySection from '@/components/home/BrandStorySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategorySection />
      <BrandStorySection />
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
