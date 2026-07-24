import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-velmora-bg">
      <div className="container">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-1">Curated for You</div>
            <h2>Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm tracking-widest hover:text-velmora-gold-dark">
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-widest">VIEW ALL →</Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;