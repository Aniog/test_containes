import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Bestsellers from '../components/Bestsellers';
import UGCReelRow from '../components/UGCReelRow';
import CategoryTiles from '../components/CategoryTiles';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const HomePage = () => {
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellerProducts} />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;
