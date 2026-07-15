import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80',
  },
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
  },
  {
    title: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Curated Edit</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Shop by Category</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-background"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-xl text-white tracking-[0.18em]">{category.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
