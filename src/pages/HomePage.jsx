import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UGCReelSection from '../components/home/UGCReelSection';
import CategoryTilesSection from '../components/home/CategoryTilesSection';
import BrandStorySection from '../components/home/BrandStorySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full bleed with overlay text */}
      <HeroSection />
      
      {/* Trust Bar - Thin strip with key selling points */}
      <TrustBar />
      
      {/* Bestsellers - 5 product cards with hover states */}
      <BestsellersSection />
      
      {/* UGC Reel - Horizontal scroll of vertical 9:16 cards */}
      <UGCReelSection />
      
      {/* Category Tiles - 3 large image tiles */}
      <CategoryTilesSection />
      
      {/* Brand Story - Split layout with image and text */}
      <BrandStorySection />
      
      {/* Testimonials - 3 review cards */}
      <TestimonialsSection />
      
      {/* Newsletter - Email capture with 10% discount */}
      <NewsletterSection />
    </main>
  );
}
