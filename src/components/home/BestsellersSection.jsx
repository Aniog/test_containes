import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../product/ProductCard';
import { getBestsellers } from '../../data/products';

export default function BestsellersSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-taupe text-sm tracking-[0.2em] uppercase mb-2 font-body">
              Customer Favorites
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso">
              Our Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-charcoal group"
          >
            <span className="text-sm font-body font-medium">View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
