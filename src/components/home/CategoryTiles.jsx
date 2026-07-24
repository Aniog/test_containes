import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { id: 'earrings', name: 'Earrings', path: '/shop/earrings' },
    { id: 'necklaces', name: 'Necklaces', path: '/shop/necklaces' },
    { id: 'huggies', name: 'Huggies', path: '/shop/huggies' },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.path}
              className="relative aspect-[3/4] group overflow-hidden rounded-sm"
            >
              <img 
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[cat-tile-name-${cat.id}] collection portrait`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 id={`cat-tile-name-${cat.id}`} className="font-serif text-3xl md:text-4xl text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    Discover Collection
                  </span>
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
