import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-editorial">
        <h2 className="section-title text-center">Shop by Category</h2>
        <p className="mt-3 text-center text-sm text-brand-muted">
          Find the perfect piece for every occasion.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/collections/${category.id}`}
              className="group relative h-72 md:h-80 overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-6">
                <span className="font-serif text-xl text-white tracking-widest uppercase">
                  {category.label}
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
