import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-sans font-medium tracking-widest uppercase text-gold-600">
            Curated Collections
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mt-3">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/collections/${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-charcoal-200"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent 
                              transition-opacity duration-300 group-hover:bg-charcoal-900/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 mb-2 transform 
                              transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-sm text-cream-200/80 font-sans opacity-0 group-hover:opacity-100 
                             transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-cream-50 font-sans text-xs tracking-widest uppercase
                              opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                              transition-all duration-300 delay-100">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
