import React from 'react';
import ProductCard from '../ui/ProductCard.jsx';
import { products } from '../../data/products.js';
const Bestsellers = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 id="bestsellers-title" className="text-4xl md:text-5xl font-serif mb-4">Our Bestsellers</h2>
        <p className="text-gray-400 font-sans uppercase tracking-widest text-xs">Curated favorites from our collection</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default Bestsellers;
