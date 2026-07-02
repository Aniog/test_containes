import React from 'react';
import { getProducts } from '@/lib/data';
import { ProductCard } from '../product/ProductCard';

export function Bestsellers() {
  const products = getProducts();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Trending Now</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover our most-loved pieces, curated for everyday elegance.</p>
        </div>
        
        {/* We have 5 cards. Grid for 5 items can be tricky, let's do a scrolling container on mobile, and flex box on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
