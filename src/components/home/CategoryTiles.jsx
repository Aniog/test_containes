import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '@/lib/data';

const CategoryTiles = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
        {collections.map((category) => (
          <Link 
            key={category.id}
            to={`/collections/${category.id}`}
            className="group relative overflow-hidden bg-secondary h-full flex items-center justify-center"
          >
            {/* Background Image */}
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              data-strk-img-id={`cat-tile-${category.id}`}
              data-strk-img={`[cat-name-${category.id}] ${category.name} jewelry editorial fashion`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            
            {/* Label */}
            <div className="relative z-10 text-center animate-in fade-in duration-700">
              <h3 id={`cat-name-${category.id}`} className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform">
                {category.name}
              </h3>
              <span className="text-white text-[10px] uppercase tracking-ultra-wide font-medium border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Explore
              </span>
            </div>
            
            {/* Static Label for Mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
              <h3 className="text-white text-xl font-serif tracking-widest uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
