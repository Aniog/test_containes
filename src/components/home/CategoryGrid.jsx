import React from 'react';
import { Link } from 'react-router-dom';

export const CategoryGrid = () => {
  const categories = [
    { name: 'Earrings', img: 'gold earrings on marble background luxury photography' },
    { name: 'Necklaces', img: 'gold necklace on silk fabric editorial lighting' },
    { name: 'Huggies', img: 'gold huggie earrings close-up macro shot warm jewelry' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name}
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-50"
          >
            <img 
              alt={cat.name}
              data-strk-img-id={`cat-img-${cat.name}`}
              data-strk-img={`${cat.img} [cat-name-${cat.name}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/40 transition-colors duration-500 flex items-center justify-center">
              <span 
                id={`cat-name-${cat.name}`}
                className="text-white text-xs uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.name}
              </span>
            </div>
            {/* Label fallback for mobile/non-hover */}
            <div className="absolute top-6 left-6 md:hidden">
              <span className="text-[#1A1A1A] text-xs uppercase tracking-[0.3em] font-bold bg-white/90 px-4 py-2">
                {cat.name}
              </span>
            </div>
            {/* Subtle overlay constant */}
            <div className="absolute bottom-6 left-6 hidden md:block group-hover:hidden">
               <span className="text-white text-[10px] uppercase tracking-[0.2em] font-medium bg-black/20 backdrop-blur-sm px-3 py-1.5">
                Shop {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
