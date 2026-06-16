import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import ProductHighlights from '@/components/home/ProductHighlights';
import AboutPreview from '@/components/home/AboutPreview';
import CTA from '@/components/home/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductHighlights />
      <AboutPreview />
      <CTA />
    </>
  );
};

export default Home;
