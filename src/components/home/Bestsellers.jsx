import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">Bestsellers</h2>
          <p className="text-brand-muted max-w-md mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that become part of your story.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
