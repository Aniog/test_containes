import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.badge === 'Bestseller');

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="flex items-end justify-between">
          <div>
            <p className="eyebrow">Curated for you</p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-text">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex btn-outline">View All</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Link to="/shop" className="btn-outline">View All</Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
