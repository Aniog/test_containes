import React from 'react';
import { ArrowRight } from 'lucide-react';
import products from '../../data/products';
import ProductCard from '../product/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-20 md:py-32 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-charcoal mb-4">
            Bestsellers
          </h2>
          <div className="w-24 h-px bg-velmora-gold mx-auto mb-6" />
          <p className="text-velmora-graphite max-w-2xl mx-auto leading-relaxed">
            Our most loved pieces, cherished by women around the world.
            Each design is carefully crafted to become a treasured part of your collection.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="/shop"
            className="inline-flex items-center text-velmora-gold hover:text-velmora-gold-dark transition-colors group"
          >
            <span className="tracking-wider uppercase text-sm font-medium">
              View All Collections
            </span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
