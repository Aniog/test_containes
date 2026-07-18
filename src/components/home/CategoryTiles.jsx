import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'cat-earrings', name: 'Earrings', query: 'gold earrings close up jewelry model ear' },
  { id: 'cat-necklaces', name: 'Necklaces', query: 'gold necklace pendant jewelry model neck' },
  { id: 'cat-huggies', name: 'Huggies', query: 'gold huggies small hoops jewelry model ear' },
];

const CategoryTiles = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif">Shop by Category</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to="/collections" 
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-8 py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span id={`${cat.id}-label`} className="text-[11px] uppercase-extra font-medium">{cat.name}</span>
                </div>
                {/* Fallback label for mobile or non-hover */}
                <span className="md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-[11px] uppercase-extra font-medium tracking-[0.3em]">
                  {cat.name}
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
