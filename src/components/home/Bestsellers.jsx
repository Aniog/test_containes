import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller' || p.reviewCount > 100).slice(0, 5);

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Curated for you</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex btn-outline">
            View All
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
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
