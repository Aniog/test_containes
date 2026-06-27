import React from 'react';
import { getRelatedProducts } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

export default function RelatedProducts({ product }) {
  const related = getRelatedProducts(product, 4);
  if (related.length === 0) return null;

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-14">
          <p className="eyebrow mb-4">Pair it with</p>
          <h2 className="font-serif text-ink text-3xl md:text-4xl leading-[1.1]">
            You may also love
          </h2>
        </div>
        <div className="hairline mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-7 gap-y-12">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}