import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '../shop/ProductCard';
import { PRODUCTS } from '@/config';

const Bestsellers = () => {
  const containerRef = useRef(null);
  const bestsellers = PRODUCTS.slice(0, 5);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <div className="space-y-3">
             <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Curated for you</p>
             <h2 className="text-3xl md:text-5xl font-serif leading-tight">Bestsellers</h2>
          </div>
          <a href="/shop" className="hidden md:block text-[10px] uppercase tracking-[0.2em] border-b border-primary pb-1 font-bold hover:opacity-50 transition-all duration-300">
            Shop all jewelry
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16">
          {bestsellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center md:hidden">
            <a href="/shop" className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-primary pb-1 font-bold">
              Shop all jewelry
            </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
