import React, { useState, useEffect } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config';
import ProductCard from '../product/ProductCard';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Bestsellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const { data: response, error } = await client
          .from('JewelryProduct')
          .select('*')
          .eq('is_bestseller', true)
          .limit(5);
        
        if (error) throw error;
        setProducts(response?.data?.list ?? []);
      } catch (err) {
        console.error('Failed to fetch bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl tracking-wide mb-4">The Bestsellers</h2>
        <p className="font-sans text-sm md:text-base uppercase tracking-widest-lg opacity-60">Most loved by our community</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
        {loading ? (
          [1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-[3/4] bg-velmora-stone/50 animate-pulse" />
          ))
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={{ ...product.data, id: product.id }} />
          ))
        )}
      </div>
    </section>
  );
};

export default Bestsellers;
