import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../../components/product/ProductCard';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const bestsellerProducts = products.filter(p => p.isBestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-32">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Bestsellers
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="font-sans text-[rgb(var(--color-muted))] text-lg max-w-2xl mx-auto">
            Our most loved pieces, chosen for their timeless design and exceptional quality.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="font-sans text-sm uppercase tracking-wider border-b-2 border-[rgb(var(--color-foreground))] pb-1 hover:text-[rgb(var(--color-accent))] hover:border-[rgb(var(--color-accent))] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
