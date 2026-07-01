import React from 'react';
import ProductCard from '../home/ProductCard';
import { products } from '../../data/products';

export default function RelatedProducts({ currentProductId }) {
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4);

  return (
    <section className="section-padding bg-[var(--color-warm-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl mb-4">You May Also Like</h2>
          <div className="w-12 h-px bg-[var(--color-gold-400)] mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
