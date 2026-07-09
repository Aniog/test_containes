import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { title: 'Earrings', path: '/shop?category=Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', path: '/shop?category=Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', path: '/shop?category=Huggies', id: 'cat-huggies' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
            >
              <div 
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${cat.id}`}
                data-strk-bg={`[category-title-${cat.id}] jewelry close up elegant`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-10">
                <div className="overflow-hidden">
                  <h3 
                    id={`category-title-${cat.id}`}
                    className="text-2xl font-serif text-white transition-transform duration-500 transform translate-y-0 group-hover:-translate-y-2"
                  >
                    {cat.title}
                  </h3>
                  <div className="h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
