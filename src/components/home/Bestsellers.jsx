import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  const bestsellers = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 md:py-32">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-secondary inline-block"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
