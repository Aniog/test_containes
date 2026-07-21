import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container-luxury py-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 text-center">Collections</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our curated collections of demi-fine jewelry, each piece thoughtfully designed
          and crafted with care.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {['Earrings', 'Necklaces', 'Huggies'].map((category) => {
            const categoryProducts = products.filter(p => p.category === category);
            const featuredProduct = categoryProducts[0];

            return (
              <Link
                key={category}
                to={`/shop?category=${category}`}
                className="group relative overflow-hidden aspect-[4/5] bg-[#FAF7F2] block"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="font-serif text-3xl text-[#2C2C2C] group-hover:text-[#C9A96E] transition-colors">
                    {category}
                  </h2>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
