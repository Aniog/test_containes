import React from 'react';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
        </div>
        <Link to="/shop">
          <Button variant="ghost" size="sm">View All</Button>
        </Link>
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
