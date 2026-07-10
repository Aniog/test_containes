import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Explore
          </span>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <span className="font-sans text-sm text-white/70 group-hover:text-white transition-colors">
                  Explore Collection
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
