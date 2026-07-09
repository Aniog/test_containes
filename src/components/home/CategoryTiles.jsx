import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    { name: 'Earrings', query: 'Elegant gold earrings on minimalist background editorial' },
    { name: 'Necklaces', query: 'Beautiful gold necklace displayed on dark silk editorial' },
    { name: 'Huggies', query: 'Small gold huggie earrings close up professional photography' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-velmora-cream/10">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/shop?category=${cat.name}`}
          className="group relative aspect-square overflow-hidden bg-velmora-sand"
        >
          <img
            data-strk-img-id={`cat-img-${cat.name}`}
            data-strk-img={cat.query}
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-3xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {cat.name}
            </h3>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:hidden">
             <span className="text-white text-xl font-serif tracking-widest">{cat.name}</span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoryTiles;
