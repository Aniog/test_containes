import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </>
  );
};

export default HomePage;
