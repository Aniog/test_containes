import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Bestsellers</h2>
            <p className="mt-3 text-sm text-brand-muted">
              The pieces our community wears most.
            </p>
          </div>
          <Link to="/shop" className="hidden md:inline-flex text-xs uppercase tracking-widest text-brand-ink hover:text-brand-accent transition-colors">
            View All
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
