import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import Button from '../ui/Button';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">Curated for you</span>
          <h2 className="font-serif text-4xl mt-2">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block">
          <Button variant="outline" size="sm">VIEW ALL</Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-10 text-center md:hidden">
        <Link to="/shop">
          <Button variant="outline" size="sm">VIEW ALL</Button>
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
