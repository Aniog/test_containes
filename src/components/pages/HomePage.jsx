import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../home/HeroSection';
import TrustBar from '../home/TrustBar';
import BestsellersSection from '../home/BestsellersSection';
import UGCReelSection from '../home/UGCReelSection';
import CategoryTiles from '../home/CategoryTiles';
import BrandStorySection from '../home/BrandStorySection';
import TestimonialsSection from '../home/TestimonialsSection';
import NewsletterSection from '../home/NewsletterSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-velmora-warm-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers Section */}
      <BestsellersSection />

      {/* UGC Reel Section */}
      <UGCReelSection />

      {/* Shop by Category */}
      <CategoryTiles />

      {/* Brand Story Section */}
      <BrandStorySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
