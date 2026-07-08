import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ink">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-brand-ink text-brand-ink text-sm tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-brand-ink hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
