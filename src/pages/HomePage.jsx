import React, { useEffect, useRef } from 'react';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import ReelRow from '@/components/home/ReelRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <div ref={containerRef} className="bg-background overflow-x-hidden">
      <HomeHero />
      <TrustBar />
      
      {/* Bestsellers Section */}
      <section className="py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary/70">The Edit</p>
              <h2 className="text-4xl md:text-6xl font-serif text-foreground">Our Bestsellers</h2>
            </div>
            <Link to="/shop" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em]">
              Explore Collection
              <span className="w-12 h-[1px] bg-foreground origin-left group-hover:scale-x-150 transition-transform duration-500" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-24">
            {bestsellers.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CategoryTiles />
      <ReelRow />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      
      {/* Feature Section */}
      <section className="py-32 bg-black text-white px-6 md:px-12 overflow-hidden relative">
         <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          data-strk-bg-id="feature-ebony-bg"
          data-strk-bg="dark luxury textures gold jewelry abstract cinematic"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
           <h2 className="text-4xl md:text-7xl font-serif italic font-light opacity-90 leading-[1.1]">
             "Fine jewelry is not just about the metal, it's about the memory."
           </h2>
           <div className="flex flex-col items-center gap-8">
              <div className="w-[1px] h-20 bg-white/20" />
              <Link to="/journal">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black px-12 h-14 tracking-widest">
                   Read The Journal
                </Button>
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
