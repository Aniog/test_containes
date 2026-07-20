import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../api/products';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 5));
      } catch (err) {
        console.error('Failed to load bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  if (loading) return (
    <div className="py-24 px-6 md:px-12 text-center font-serif italic text-velmora-muted">
      Curating the collection...
    </div>
  );

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-stone">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-sans font-semibold">Most Wanted</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">The Bestsellers</h2>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-exclusive font-sans border-b border-velmora-dark pb-1 text-velmora-dark hover:text-velmora-gold hover:border-velmora-gold transition-all">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4 md:gap-x-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
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
