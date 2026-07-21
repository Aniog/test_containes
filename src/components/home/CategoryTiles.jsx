import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-champagne text-sm tracking-[0.3em] uppercase mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Curated Collections
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/collection?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/40 transition-opacity duration-300 group-hover:bg-espresso/50" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                  {category.name}
                </h3>
                <p className="text-ivory/80 text-sm mb-4">
                  {category.description}
                </p>
                <span className="flex items-center gap-2 text-champagne text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
