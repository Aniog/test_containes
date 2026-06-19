import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import ReelRow from '@/components/home/ReelRow';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-serif">Quiet Essentials</h2>
          <button className="text-sm uppercase tracking-widest border-b border-foreground pb-1">Shop All</button>
        </div>
        <ProductGrid limit={5} />
      </section>
      <ReelRow />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
