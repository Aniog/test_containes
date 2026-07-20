import React from 'react';
import { getRelatedProducts } from '../../data/products';
import ProductCard from '../ui/ProductCard';

export default function RelatedProducts({ productId }) {
  const related = getRelatedProducts(productId, 4);

  return (
    <section className="section-padding border-t border-[var(--velmora-border-light)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">Complete the Look</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">You May Also Like</h2>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
