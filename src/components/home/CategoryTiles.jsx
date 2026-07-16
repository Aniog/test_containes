import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'cat-earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'cat-necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'cat-huggies', name: 'Huggies', slug: 'huggies' },
];

const CategoryTiles = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}] aesthetic jewelry luxury`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.name}
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative overflow-hidden pt-2 px-1">
                <span id={`cat-name-${cat.id}`} className="block text-white text-3xl font-serif tracking-widest uppercase py-4 px-8 border border-white/40 backdrop-blur-sm transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.name}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
