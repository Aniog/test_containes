import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Link 
            key={idx} 
            to="/shop" 
            className="group relative aspect-[4/5] overflow-hidden bg-secondary flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 z-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30"
              data-strk-bg-id={`cat-bg-${idx}`}
              data-strk-bg={`[category-title-${idx}] minimalist gold jewelry editorial`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="relative z-10 text-center">
              <h3 
                id={`category-title-${idx}`}
                className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.title}
              </h3>
              <div className="w-12 h-[1px] bg-white mx-auto mt-4 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-700 delay-100" />
            </div>
            {/* Always visible label on mobile if needed, but here we do hover reveal as requested */}
            <div className="absolute inset-x-0 bottom-8 text-center md:hidden">
               <h3 className="text-white text-xl font-serif tracking-widest uppercase">{cat.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
