// Homepage Component - Combines all homepage sections
import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCReel from './UGCReel';
import CategoryTiles from './CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import products from '../../data/products';

const HomePage = () => {
  // Get featured products for bestsellers section
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers Section */}
      <Bestsellers products={featuredProducts} />

      {/* UGC Reel Section */}
      <UGCReel />

      {/* Category Tiles */}
      <CategoryTiles />

      {/* Brand Story Section */}
      <BrandStory />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default HomePage;
