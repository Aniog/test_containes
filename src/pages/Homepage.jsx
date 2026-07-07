import React from 'react';
import Hero from '../components/homepage/Hero';
import TrustBar from '../components/homepage/TrustBar';
import Bestsellers from '../components/homepage/Bestsellers';
import UGCReelRow from '../components/homepage/UGCReelRow';
import CategoryTiles from '../components/homepage/CategoryTiles';
import BrandStory from '../components/homepage/BrandStory';
import Testimonials from '../components/homepage/Testimonials';
import Newsletter from '../components/homepage/Newsletter';
import products from '../data/products';

export default function Homepage() {
  return (
    <div className="bg-cream">
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <UGCReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
