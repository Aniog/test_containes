import React from 'react';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

const Bestsellers = () => {
  const bestsellers = PRODUCTS.filter(p => p.tags.includes('bestseller')).slice(0, 5);

  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 id="bestsellers-title" className="text-3xl font-serif mb-2">The Favorites</h2>
            <p id="bestsellers-subtitle" className="text-muted-foreground uppercase tracking-widest text-[10px]">Your most-loved treasures, back in stock.</p>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">View All</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Bestsellers;
