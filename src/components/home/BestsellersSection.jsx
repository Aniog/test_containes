import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '@/components/shop/ProductCard';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function BestsellersSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    async function fetchProducts() {
      try {
        const { data: response, error } = await client
          .from('Products')
          .select('*')
          .eq('bestseller', true)
          .limit(5);
        if (error) throw error;
        const list = response?.data?.list ?? [];
        if (mounted) {
          setProducts(list.map(item => item.data));
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load bestsellers:', err);
        if (mounted) setLoading(false);
      }
    }
    fetchProducts();
    return () => { mounted = false; };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
            Bestsellers
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-border-light mb-4" />
                <div className="h-4 bg-border-light w-3/4 mb-2" />
                <div className="h-3 bg-border-light w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
