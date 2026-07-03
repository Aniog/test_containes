import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCReelStrip from '../components/UGCReelStrip';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import products from '../data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <UGCReelStrip />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
