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
  // Get bestseller products
  const bestsellerProducts = products.filter(p => p.isBestseller);

  return (
    <main className="page-transition">
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Bestsellers */}
      <Bestsellers products={bestsellerProducts} />

      {/* UGC Reel / Social Feed */}
      <UGCReel />

      {/* Shop by Category */}
      <CategoryTiles />

      {/* Brand Story */}
      <BrandStory />

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
};

export default HomePage;
