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

export default function Homepage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
