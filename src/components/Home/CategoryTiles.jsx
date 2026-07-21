import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://via.placeholder.com/800x800/FFF9F0/8B7355?text=Earrings',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://via.placeholder.com/800x800/FFF9F0/8B7355?text=Necklaces',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://via.placeholder.com/800x800/FFF9F0/8B7355?text=Huggies',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="category-tile aspect-square"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="category-label">
              <span className="font-serif text-2xl text-white uppercase tracking-wider">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
