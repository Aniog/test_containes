import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">DISCOVER</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] hover:text-[var(--color-gold)]">
          View All →
        </Link>
      </div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {bestsellers.map((product) => (
          <motion.div key={product.id} variants={item}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-[0.1em] hover:text-[var(--color-gold)]">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
