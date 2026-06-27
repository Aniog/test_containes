import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', query: 'gold stud earrings aesthetic white background editorial' },
    { name: 'Necklaces', query: 'delicate gold necklace luxury display aesthetic' },
    { name: 'Huggies', query: 'gold huggie hoop earrings minimal aesthetic' }
  ];

  return (
    <section className="py-24 bg-primary-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={cat.name}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-square overflow-hidden bg-stone/20"
            >
              <img 
                data-strk-img-id={`cat-tile-${idx}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
