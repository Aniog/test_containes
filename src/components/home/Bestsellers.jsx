import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.15em] text-text-muted mb-2">DISCOVER</p>
          <h2 className="serif text-4xl tracking-tight">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-widest hover:text-gold transition-colors">
          VIEW ALL →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-widest hover:text-gold transition-colors">
          VIEW ALL →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;