import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Consumer Electronics', id: 'cat-electronics', imageId: 'product-electronics-01' },
  { name: 'Home & Kitchen', id: 'cat-home', imageId: 'product-home-02' },
  { name: 'Fashion & Apparel', id: 'cat-fashion', imageId: 'product-fashion-03' },
  { name: 'Industrial Equipment', id: 'cat-industrial', imageId: 'product-industrial-04' },
  { name: 'Toys & Gifts', id: 'cat-toys', imageId: 'product-toys-05' },
  { name: 'Outdoor & Sports', id: 'cat-sports', imageId: 'product-sports-06' }
];

const ProductsSummary = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="md:w-2/3">
            <h2 id="products-title" className="text-3xl md:text-4xl font-bold text-primary mb-4">What We Source</h2>
            <p id="products-subtitle" className="text-lg text-gray-600">
              We have extensive experience across diverse industries, helping clients source thousands of SKUs annually.
            </p>
          </div>
          <Link to="/products" className="mt-6 md:mt-0 text-primary font-bold hover:underline flex items-center">
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl h-64 shadow-md bg-gray-200">
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                data-strk-bg-id={cat.imageId}
                data-strk-bg={`[cat-name-${index}] product manufacturing China`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <h3 id={`cat-name-${index}`} className="text-xl font-bold text-white">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSummary;
