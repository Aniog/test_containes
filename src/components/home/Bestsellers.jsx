import React from 'react';
import { products } from '@/api/products';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-[10px] uppercase-extra text-accent mb-4 block">Our Curation</span>
          <h2 className="text-4xl md:text-5xl font-serif">The Bestsellers</h2>
        </div>
        <Link 
          to="/collections" 
          className="text-[11px] uppercase-extra border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-all"
        >
          View All Products
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
