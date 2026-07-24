import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Select 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] text-[#B89778] mb-2">CURATED FOR YOU</p>
          <h2 className="serif text-4xl tracking-wide text-[#1C1917]">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-[0.05em] text-[#B89778] hover:text-[#A67C52] transition-colors">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-12">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10 md:hidden">
        <Link to="/shop" className="text-sm tracking-[0.05em] text-[#B89778] hover:text-[#A67C52]">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
