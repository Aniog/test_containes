import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'earrings', label: 'Earrings', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80' },
  { id: 'necklaces', label: 'Necklaces', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80' },
  { id: 'huggies', label: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80' },
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="text-center">
        <p className="section-subtitle">Explore</p>
        <h2 className="section-title mt-2">Shop by Category</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-72 overflow-hidden rounded-2xl md:h-80"
          >
            <img
              src={category.image}
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 flex items-end p-6">
              <span className="font-serif text-xl text-white md:text-2xl">{category.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
