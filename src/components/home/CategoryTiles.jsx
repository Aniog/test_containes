import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: 'Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', id: 'cat-huggies' }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.title} 
            to="/shop" 
            className="group relative aspect-[4/5] overflow-hidden bg-brand-stone/5"
          >
            <img 
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}] luxury gold jewelry category white background`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={cat.title}
            />
            <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-colors duration-500 flex items-center justify-center">
              <span id={`cat-label-${cat.id}`} className="text-white font-serif text-3xl uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.title}
              </span>
            </div>
            <div className="md:hidden absolute bottom-6 left-0 w-full text-center">
               <span className="text-white font-serif text-2xl uppercase tracking-widest bg-brand-charcoal/40 px-4 py-1">
                {cat.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
