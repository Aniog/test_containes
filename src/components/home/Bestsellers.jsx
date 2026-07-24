import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[#F8F5F1]">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Curated for You</span>
            <h2 className="font-serif text-3xl mt-1">Bestsellers</h2>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline text-sm tracking-[0.06em] uppercase text-[#6B645C] hover:text-[#2C2825] border-b border-[#D9D2C7] pb-0.5"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/shop"
            className="text-sm tracking-[0.06em] uppercase text-[#6B645C] hover:text-[#2C2825] border-b border-[#D9D2C7] pb-0.5"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;