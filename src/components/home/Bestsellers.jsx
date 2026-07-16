import React, { useEffect, useRef } from 'react';
import { PRODUCTS } from '@/config';
import ProductCard from '../shop/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-sans font-semibold text-muted-foreground mb-3">Our Most Loved Pieces</h2>
            <h3 className="text-4xl md:text-5xl font-serif">The Bestsellers</h3>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-black pb-1 mb-2 hover:opacity-70 transition-opacity">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {PRODUCTS.slice(0, 5).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
