import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-gold)' }}
          >
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.slice(1, 4).map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to top, rgba(45, 38, 33, 0.7) 0%, rgba(45, 38, 33, 0.2) 50%, transparent 100%)'
                }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                  {category.name}
                </h3>
                <span
                  className="inline-flex items-center gap-2 text-sm text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Shop Now
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
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
