import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { fetchProducts } from '@/api/products';

export default function Bestsellers() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let mounted = true;
    fetchProducts({ bestseller: true, limit: 6 })
      .then((data) => { if (mounted) { setProducts(data); setStatus('ready'); } })
      .catch(() => { if (mounted) setStatus('error'); });
    return () => { mounted = false; };
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-accent mb-2">Most Loved</p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-dark">Bestsellers</h2>
          </div>
        </div>
        {status === 'loading' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-velmora-bg" />
                <div className="mt-3 h-4 w-2/3 bg-velmora-bg" />
                <div className="mt-2 h-3 w-1/3 bg-velmora-bg" />
              </div>
            ))}
          </div>
        )}
        {status === 'ready' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
