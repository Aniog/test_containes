import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CategoryTiles = () => {
  const categories = [
    { name: "Earrings", search: "elegant gold earrings editorial photography", span: "md:col-span-1" },
    { name: "Necklaces", search: "luxury gold necklace editorial jewelry macro", span: "md:col-span-2" },
    { name: "Huggies", search: "minimalist gold huggie earrings closeup fashion", span: "md:col-span-1" },
  ];

  return (
    <section className="bg-velmora-cream">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[1200px] md:h-[500px]">
          {categories.map((cat, i) => (
            <Link 
              to={`/shop?category=${cat.name}`} 
              key={i} 
              className={cn("relative group overflow-hidden block h-full", cat.span)}
            >
              <div 
                data-strk-bg-id={`cat-tile-${i}`}
                data-strk-bg={cat.search}
                data-strk-bg-ratio="3x2"
                data-strk-bg-width="1200"
                className="absolute inset-0 w-full h-full bg-secondary transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                 <h3 className="text-2xl font-serif tracking-[0.3em] uppercase mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">{cat.name}</h3>
                 <span className="text-[10px] uppercase tracking-[0.4em] border-b hairline pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">Shop Now</span>
              </div>
            </Link>
          ))}
       </div>
    </section>
  );
};

export default CategoryTiles;
