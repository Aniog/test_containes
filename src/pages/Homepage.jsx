import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Homepage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full Bleed */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers Product Grid */}
      <Bestsellers />

      {/* UGC Reel-Style Section */}
      <UGCReel />

      {/* Shop by Category Tiles */}
      <CategoryTiles />

      {/* Brand Story Split Section */}
      <BrandStory />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Capture */}
      <Newsletter />
    </main>
  );
}
