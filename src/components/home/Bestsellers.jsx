import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import products from '../../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.featured).slice(0, 5);

  return (
    <section className="py-20 px-4">
      <div className="container-premium">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="btn-secondary inline-block"
          >
            View All Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
