import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', id: 'earrings', imageId: 'cat-earrings' },
    { name: 'Necklaces', id: 'necklaces', imageId: 'cat-necklaces' },
    { name: 'Huggies', id: 'huggies', imageId: 'cat-huggies' },
  ];

  return (
    <section className="py-24 container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden"
          >
            <img
              data-strk-img-id={cat.imageId}
              data-strk-img={`[cat-name-${cat.id}] fine jewelry collection close-up`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-luxury group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.name}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-luxury" />
            
            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center group-hover:translate-y-[-10px] transition-luxury">
                <h3 id={`cat-name-${cat.id}`} className="text-white text-3xl font-serif tracking-widest">{cat.name}</h3>
                <span className="text-white/0 group-hover:text-white/100 block mt-2 uppercase-spaced text-[10px] font-bold transition-luxury">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
