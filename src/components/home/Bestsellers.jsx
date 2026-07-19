import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import Button from '@/components/ui/Button';
import { products } from '@/data/products';

export default function Bestsellers() {
  // Show first 5 products (all seed products)
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-charcoal">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="secondary">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
