import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', id: 'cat-earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies', id: 'cat-huggies' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.path} className="relative aspect-[4/5] overflow-hidden group">
            <div
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={`[cat-label-${cat.id}]`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 id={`cat-label-${cat.id}`} className="text-white text-2xl font-serif tracking-widest uppercase opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {cat.name}
              </h3>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center md:hidden">
               <h3 className="text-white text-lg font-serif tracking-widest uppercase">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoryTiles;
