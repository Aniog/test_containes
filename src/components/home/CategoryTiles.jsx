import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', query: 'minimalist gold earring detail editorial' },
  { name: 'Necklaces', query: 'gold chain necklace on model aesthetic' },
  { name: 'Huggies', query: 'gold huggie earring close up ear model' }
];

const CategoryTiles = () => {
  return (
    <section className="py-20 md:py-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index}
              to={`/collections/${cat.name.toLowerCase()}`}
              className="relative group aspect-[4/5] overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-neutral-200 transition-transform duration-1000 group-hover:scale-110"
                data-strk-bg-id={`cat-tile-${index}`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-white text-3xl font-serif tracking-widest">{cat.name}</h3>
                  <p className="text-white/80 uppercase tracking-widest text-[10px] mt-4">Shop the Edit</p>
                </div>
              </div>
              <div className="absolute bottom-10 left-10 transition-opacity group-hover:opacity-0">
                 <h3 className="text-white text-xl font-serif tracking-widest uppercase">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
