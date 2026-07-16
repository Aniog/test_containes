import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: 'Earrings', query: 'gold drop earrings on pedestal' },
  { name: 'Necklaces', query: 'gold chain necklace on satin' },
  { name: 'Huggies', query: 'gold huggie earrings close up' }
];

const CategoryTiles = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat.name} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              data-strk-img-id={`cat-tile-${cat.name}`}
              data-strk-img={`[cat-label-${cat.name}] ${cat.query}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                id={`cat-label-${cat.name}`}
                className="serif-caps text-white text-lg tracking-[0.3em] font-medium border-b border-transparent group-hover:border-white pb-1 transition-all"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
