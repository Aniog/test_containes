import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', image: '/api/placeholder/600/600', path: '/shop?category=Earrings' },
  { name: 'Necklaces', image: '/api/placeholder/600/600', path: '/shop?category=Necklaces' },
  { name: 'Huggies', image: '/api/placeholder/600/600', path: '/shop?category=Huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">Shop by Category</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="category-tile group relative overflow-hidden aspect-square block"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Overlay with label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-cream/90 px-8 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-sans text-sm tracking-widest uppercase text-charcoal">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
