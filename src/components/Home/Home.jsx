import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Bestsellers from './Bestsellers';
import UGCReel from './UGCReel';
import CategoryTiles from './CategoryTiles';
import BrandStory from './BrandStory';
import Testimonials from './Testimonials';
import { products, ugcItems, testimonials } from '../../data/products';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Bestsellers products={products} />
      <UGCReel items={ugcItems} />
      <CategoryTiles />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
    </main>
  );
}
