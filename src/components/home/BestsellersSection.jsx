import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard.jsx';
import { fetchBestsellers } from '../../api/products.js';

export default function BestsellersSection() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchBestsellers()
      .then((rows) => {
        setProducts(rows);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
          Shop Our Favorites
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light">
          Bestsellers
        </h2>
      </div>

      {status === 'loading' && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[3/4] bg-border mb-4" />
              <div className="h-4 bg-border w-2/3 mb-2" />
              <div className="h-3 bg-border w-1/3" />
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
    </section>
  );
}
