import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-foreground">
          Best sellers
        </h2>
        <div className="divider w-20 mx-auto my-6" />
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Our most loved pieces, treasured by women around the world
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {bestsellerProducts.map((product) => (
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
    </section>
  );
}
