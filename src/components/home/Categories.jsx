import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry close up' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry model wearing' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings ear close up' }
];

const Categories = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] bg-muted overflow-hidden"
          >
            <div
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={`[cat-label-${cat.id}] ${cat.query} editorial`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
            
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span 
                id={`cat-label-${cat.id}`}
                className="text-white font-serif text-3xl md:text-4xl tracking-wide"
              >
                {cat.name}
              </span>
            </div>

            {/* Mobile label hint */}
            <div className="md:hidden absolute bottom-4 left-4 z-20">
               <span className="text-white text-[10px] uppercase tracking-widest font-medium flex items-center">
                 Shop {cat.name}
               </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
