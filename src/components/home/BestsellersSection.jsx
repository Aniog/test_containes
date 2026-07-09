import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';

export default function BestsellersSection({ products }) {
  const bestsellers = products.filter((p) => p.is_bestseller || p.data?.is_bestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--gold)] mb-3"
          >
            Most Loved
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl text-[var(--charcoal)]"
          >
            Bestsellers
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, i) => (
            <motion.div
              key={product.id || product.data?.id || i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product.data || product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
