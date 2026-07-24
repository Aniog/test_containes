import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCSection from '../components/home/UGCSection';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import products from '../data/products';
import { testimonials } from '../data/products';

const HomePage = () => {
  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellerProducts} />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
};

export default HomePage;
