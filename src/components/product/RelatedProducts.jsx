import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../home/ProductCard';

export default function RelatedProducts({ product }) {
  const related = product.related
    .map(id => products.find(p => p.id === id))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-t border-charcoal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 tracking-wide mb-8 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
