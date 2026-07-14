import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config';
import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const BestsellerGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('isBestseller', true)
          .limit(5);

        if (error) throw error;
        setProducts(response?.data?.list || []);
      } catch (err) {
        console.error('Error fetching bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-accent" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[4/5] bg-brand-beige mb-6" />
              <div className="h-4 bg-brand-beige w-3/4 mx-auto mb-2" />
              <div className="h-4 bg-brand-beige w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-12 h-[1px] bg-accent" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProductCard product={product.data ? { ...product.data, id: product.id } : product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestsellerGrid;
