import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: 'Earrings', path: '/shop/earrings', imgQuery: 'pair of elegant gold earrings' },
    { title: 'Necklaces', path: '/shop/necklaces', imgQuery: 'gold delicate necklace on skin' },
    { title: 'Huggies', path: '/shop/huggies', imgQuery: 'gold huggie earrings close up' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFDFB]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Link 
            key={idx} 
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <div className="absolute inset-0 z-0 scale-105 group-hover:scale-110 transition-luxury duration-1000">
              <img
                data-strk-img-id={`cat-tile-${idx}`}
                data-strk-img={cat.imgQuery}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-luxury" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-serif tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-luxury">
                {cat.title}
              </h3>
              <span className="text-[10px] uppercase tracking-widest border border-white px-6 py-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-luxury">
                Explore
              </span>
              
              {/* Static Label (visible initially, hides on hover if needed) */}
              <div className="absolute bottom-10 group-hover:opacity-0 transition-luxury">
                 <h3 className="text-xl font-serif tracking-widest uppercase border-b-2 border-white/50 pb-2">{cat.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
