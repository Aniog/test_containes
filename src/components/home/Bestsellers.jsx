import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-2">Most Loved</p>
            <h2 className="section-title">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-xs font-semibold tracking-widest uppercase text-brand-ink hover:text-brand-accent transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
