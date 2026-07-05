import React from 'react';
import ProductCard from '../ProductCard';
import { products } from '@/lib/store';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <span className="text-accent text-[10px] uppercase tracking-[0.5em] mb-4 block">Essentials</span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide mb-6">Bestsellers</h2>
          <div className="w-12 h-px bg-border mx-auto mb-6" />
          <p className="text-muted text-sm leading-relaxed">
            Discover our most-loved pieces, chosen by our community. Timeless silhouettes crafted in 18K gold plating.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-[10px] uppercase tracking-extrawide border-b border-primary/20 pb-2 hover:border-primary transition-all duration-300">
            View All Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
