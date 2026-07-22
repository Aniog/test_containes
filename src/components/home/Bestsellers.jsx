import React, { useState } from 'react';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.isBestseller);

  return (
    <section className="container-wide section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-[10px] tracking-superwide uppercase text-velmora-taupe mb-3">
          Most Loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velmora-charcoal">
          Bestsellers
        </h2>
        <hr className="hairline-divider w-12 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
