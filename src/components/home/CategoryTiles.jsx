import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-200"
            >
              {/* Background Image */}
              <img 
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                <h3 className="font-serif text-2xl md:text-3xl tracking-widest">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.count} pieces
                </p>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-4 border border-cream/0 group-hover:border-cream/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;