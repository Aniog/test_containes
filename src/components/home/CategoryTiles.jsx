import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Earrings', path: '/shop?category=Earrings', imgLabel: 'Earrings jewelry gold' },
  { name: 'Necklaces', path: '/shop?category=Necklaces', imgLabel: 'Necklaces jewelry gold' },
  { name: 'Huggies', path: '/shop?category=Huggies', imgLabel: 'Huggies jewelry gold' },
];

const CategoryTiles = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="group relative h-[400px] md:h-[600px] overflow-hidden bg-stone-200"
          >
            <img
              data-strk-img-id={`category-tile-${idx}`}
              data-strk-img={`[cat-label-${idx}] jewelry luxury gold product`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={cat.name}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative overflow-hidden pt-2">
                <h3 
                  id={`cat-label-${idx}`}
                  className="text-white text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase transition-transform duration-700 translate-y-2 group-hover:translate-y-0"
                >
                  {cat.name}
                </h3>
                <div className="h-px bg-white/60 w-0 group-hover:w-full transition-all duration-700 mx-auto mt-2" />
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-y-4 group-hover:translate-y-0">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white/40 pb-1">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
