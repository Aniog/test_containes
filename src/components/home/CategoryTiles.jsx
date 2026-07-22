import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Studs, drops & hoops',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80'
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Chains, pendants & layers',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80'
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Creoles & mini hoops',
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80'
  }
];

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Curated Collections
          </p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm tracking-wide">
                  {category.description}
                </p>
                {/* Hover Arrow */}
                <span className="mt-6 text-white text-xs uppercase tracking-[0.2em] opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore →
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
