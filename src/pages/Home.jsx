import React, { useState, useEffect, useRef } from 'react';
import { DataClient, ImageHelper } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';
import strkImgConfig from '../strk-img-config.json';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ProductCard from '../components/products/ProductCard';
import UGCGrid from '../components/home/UGCGrid';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data, error } = await client
          .from('Products')
          .select('*')
          .eq('isBestseller', true)
          .limit(5);
        
        if (error) throw error;
        setBestsellers(data?.list || []);
      } catch (err) {
        console.error('Error fetching bestsellers:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [isLoading, bestsellers]);

  return (
    <div ref={containerRef}>
      <Hero />
      <TrustBar />
      
      {/* Bestsellers Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="serif-caps text-sm mb-4">Curated selection</h2>
          <h3 className="text-3xl md:text-5xl font-serif">The Bestsellers</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {isLoading ? (
            Array(5).fill(0).map((_, i) => (
              <div key={i} className="space-y-4 animate-pulse">
                <div className="aspect-[3/4] bg-stone-200" />
                <div className="h-4 bg-stone-200 w-3/4 mx-auto" />
                <div className="h-4 bg-stone-200 w-1/4 mx-auto" />
              </div>
            ))
          ) : (
            bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>

      <CategoryTiles />
      <BrandStory />
      <UGCGrid />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
