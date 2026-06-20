import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=900&q=80',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f46?w=900&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-black/20 transition-colors duration-500 group-hover:bg-brand-black/40" />
            <div className="absolute inset-x-0 bottom-0 flex items-end p-6">
              <span className="font-serif text-2xl uppercase tracking-widest text-white">
                {category.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
