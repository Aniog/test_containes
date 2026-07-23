import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import products from '../../data/products';
import ProductCard from '../common/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.filter(product => product.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg text-velmora-charcoal mb-4">
            Our Bestsellers
          </h2>
          <div className="divider mb-6" />
          <p className="font-sans text-base text-velmora-charcoal-light max-w-2xl mx-auto">
            Discover our most loved pieces, cherished by women around the world
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {bestsellerProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            to="/shop"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            View All Collections
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
