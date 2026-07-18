import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { products, testimonials } from '../data/products';

export default function Home() {
  const bestsellerProducts = products.filter(p => p.bestseller);

  return (
    <div>
      <Hero />
      <TrustBar />
      <Bestsellers products={bestsellerProducts} />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials testimonials={testimonials} />
      <Newsletter />
    </div>
  );
}
