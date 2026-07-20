import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', name: 'Earrings', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
  { id: 'necklaces', name: 'Necklaces', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
  { id: 'huggies', name: 'Huggies', image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" },
];

const CategoryTiles = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-square overflow-hidden bg-zinc-100"
          >
            <img 
              data-strk-img-id={`cat-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}] jewelry`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                id={`cat-label-${cat.id}`}
                className="text-white text-xs uppercase tracking-[0.3em] font-medium border-b border-transparent group-hover:border-white pb-1 transition-all"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
