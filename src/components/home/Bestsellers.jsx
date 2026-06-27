import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-xs tracking-[3px] text-[#C5A46E]">CURATED FOR YOU</span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-[-0.5px] text-[#2C2823] mt-1">Bestsellers</h2>
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