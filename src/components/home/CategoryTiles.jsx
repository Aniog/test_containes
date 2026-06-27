import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', imgId: 'cat-earrings' },
    { name: 'Necklaces', imgId: 'cat-necklaces' },
    { name: 'Huggies', imgId: 'cat-huggies' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to="/shop" 
            className="group relative aspect-[4/5] bg-base-dark overflow-hidden"
          >
            <div 
              data-strk-bg-id={`cat-bg-${cat.name}`}
              data-strk-bg={`[cat-name-${cat.name}] jewelry collection editorial`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span 
                id={`cat-name-${cat.name}`}
                className="font-serif text-3xl text-white uppercase tracking-widest border-b border-white pb-2"
               >
                 {cat.name}
               </span>
            </div>
            {/* Mobile label */}
            <div className="md:hidden absolute bottom-6 left-6">
               <span className="font-serif text-2xl text-white uppercase tracking-widest">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
