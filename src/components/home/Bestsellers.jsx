import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import products from '../../data/products';

export default function Bestsellers() {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
          Best sellers
        </h2>
        <div className="hairline w-24 mx-auto mb-6" />
        <p className="text-velmora-text-light max-w-2xl mx-auto">
          Our most loved pieces, chosen by women who appreciate quiet luxury and timeless design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
        {bestsellerProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="btn-premium-outline inline-block"
        >
          View All Collections
        </Link>
      </div>
    </section>
  );
}
