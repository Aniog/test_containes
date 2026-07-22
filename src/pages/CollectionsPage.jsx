import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products';

const CollectionsPage = () => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="container-luxury text-center">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
            Curated for You
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal-900 mt-4 mb-6">
            Our Collections
          </h1>
          <p className="font-sans text-base text-charcoal-600 max-w-xl mx-auto">
            Explore our carefully curated collections, each designed to help you find the perfect piece for any occasion.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-luxury">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link to={`/collections/${category.id}`} className="block group">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Link>
                  {/* Decorative element */}
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-gold-400/20" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}>
                  <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
                    {category.count} Pieces
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-3 mb-4">
                    {category.name}
                  </h2>
                  <p className="font-sans text-charcoal-600 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Link
                    to={`/collections/${category.id}`}
                    className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wider 
                               text-charcoal-900 hover:text-gold-600 transition-colors group"
                  >
                    <span className="border-b border-charcoal-300 group-hover:border-gold-600 pb-1">
                      Explore Collection
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal-900">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-6">
            Looking for something specific?
          </h2>
          <p className="font-sans text-base text-charcoal-400 mb-8 max-w-md mx-auto">
            Browse our complete collection to find the perfect piece for you.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-10 py-4 bg-cream-50 text-charcoal-900 
                       font-sans text-sm font-medium tracking-widest uppercase hover:bg-gold-100 transition-all"
          >
            Shop All Jewelry
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
