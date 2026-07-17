import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light font-['Cormorant_Garamond'] mb-2">
          Bestsellers
        </h2>
        <div className="w-12 h-[1px] bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block border border-velmora-gold text-velmora-gold px-8 py-3 hover:bg-velmora-gold hover:text-white transition-colors tracking-wider text-sm"
        >
          VIEW ALL PRODUCTS
        </Link>
      </div>
    </section>
  );
}
