import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Curated</p>
        <h2 className="section-title mt-2">Shop by Category</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            to="/shop"
            className="group relative h-72 overflow-hidden rounded-2xl md:h-96"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl text-white transition-transform duration-300 group-hover:scale-105">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
