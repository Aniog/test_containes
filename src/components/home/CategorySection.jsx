import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategorySection() {
  // Filter only main categories (excluding 'all')
  const mainCategories = categories.filter(c => c.id !== 'all');

  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-taupe text-sm tracking-[0.2em] uppercase mb-2 font-body">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            Shop by Category
          </h2>
        </div>

        {/* Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {mainCategories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={`group relative overflow-hidden rounded ${
                index === 0 ? 'md:row-span-2 md:aspect-[3/5]' : 'aspect-[4/3]'
              }`}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-ivory/80 text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-ivory/0 group-hover:border-ivory/30 transition-colors duration-300 m-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
