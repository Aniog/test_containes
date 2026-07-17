import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ProductGrid from '../components/shop/ProductGrid';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { PRODUCTS } from '../lib/products';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <TrustBar />
      
      <section className="py-24 px-6 md:px-12 bg-[#FDFDFB]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0 text-center md:text-left">
            <div>
              <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif mb-4">Bestsellers</h2>
              <p className="text-gray-500 uppercase tracking-widest text-xs">Curated favorites loved by many</p>
            </div>
            <button className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-luxury">
              Shop All
            </button>
          </div>
          <ProductGrid products={bestsellers} type="bestsellers" />
        </div>
      </section>

      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
