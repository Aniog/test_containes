import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: 'Earrings', id: 'cat-earrings', path: '/shop?category=Earrings' },
    { title: 'Necklaces', id: 'cat-necklaces', path: '/shop?category=Necklaces' },
    { title: 'Huggies', id: 'cat-huggies', path: '/shop?category=Huggies' }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.path} className="group relative aspect-square overflow-hidden bg-cream">
            <img 
              data-strk-img-id={`cat-tile-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}] jewelry collection`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
              <h3 id={`cat-label-${cat.id}`} className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
