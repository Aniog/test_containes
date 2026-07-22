import React from 'react';
import ProductCard from '@/components/home/ProductCard';
import { products } from '@/data/products';
import Button from '@/components/ui/button';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-widest uppercase text-accent mb-2">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href="/shop">View All</a>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
