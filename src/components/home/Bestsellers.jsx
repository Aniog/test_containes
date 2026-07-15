import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import ProductCard from '../shop/ProductCard';
import Button from '../ui/Button';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Discover</span>
          <h2 className="heading-display text-4xl md:text-5xl mt-1">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop">
          <Button variant="outline" size="sm">View All</Button>
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
