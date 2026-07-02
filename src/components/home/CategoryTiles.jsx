import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', name: 'Earrings', imageQuery: 'minimalist gold earrings close up macro' },
  { id: 'necklaces', name: 'Necklaces', imageQuery: 'elegant gold necklace on neck close up' },
  { id: 'huggies', name: 'Huggies', imageQuery: 'gold huggie earrings ear display aesthetic' },
];

const CategoryTiles = () => {
  return (
    <section className="py-24 bg-velmora-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={cat.imageQuery}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-serif text-3xl text-white uppercase tracking-[0.3em] border-b border-white pb-2">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
