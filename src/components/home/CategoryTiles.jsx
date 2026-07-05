import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', label: 'Ears' },
    { name: 'Necklaces', path: '/shop?category=necklaces', label: 'Neck' },
    { name: 'Huggies', path: '/shop?category=huggies', label: 'Huggies' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img
              alt={cat.name}
              data-strk-img-id={`cat-${cat.name.toLowerCase()}`}
              data-strk-img={`aesthetic studio photo of ${cat.name.toLowerCase()} gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <h3 id={`cat-title-${cat.name.toLowerCase()}`} className="text-white text-3xl md:text-4xl font-serif tracking-widest uppercase">
                  {cat.name}
                </h3>
                <span className="text-white text-[10px] uppercase tracking-[0.4em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Discover {cat.label}
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
