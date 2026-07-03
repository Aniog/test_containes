// Velmora Fine Jewelry - Home Page Component
import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import BestsellersSection from './BestsellersSection';
import UGCSection from './UGCSection';
import CategoriesSection from './CategoriesSection';
import BrandStorySection from './BrandStorySection';
import TestimonialsSection from './TestimonialsSection';
import NewsletterSection from './NewsletterSection';

const HomePage = () => {
  return (
    <div className="bg-[#FAF8F5]">
      <Hero />
      <TrustBar />
      <BestsellersSection />
      <UGCSection />
      <CategoriesSection />
      <BrandStorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
