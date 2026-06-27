import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const Bestsellers = () => {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 lg:py-28 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border-b border-velmora-charcoal pb-1 text-xs uppercase tracking-[0.2em] hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            Shop All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
