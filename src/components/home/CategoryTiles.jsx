import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Earrings&font=playfair-display',
    to: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Necklaces&font=playfair-display',
    to: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://placehold.co/800x800/f5f0eb/8c7b6c?text=Huggies&font=playfair-display',
    to: '/shop?category=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.to}
            className="group relative h-72 overflow-hidden rounded-2xl sm:h-80"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 flex items-end p-5">
              <span className="font-serif text-xl font-medium tracking-wide text-white drop-shadow">
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
