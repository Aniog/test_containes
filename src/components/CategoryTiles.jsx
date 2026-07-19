import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const CategoryTiles = () => {
  return (
    <section className="section-padding">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground uppercase tracking-wider text-sm">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative h-80 overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 elegant-transition group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={category.image}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                style={{ 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  backgroundColor: '#e8e4df'
                }}
              />

              {/* Overlay */}
              <div className="category-overlay">
                <span className="category-overlay-text">
                  {category.name}
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
