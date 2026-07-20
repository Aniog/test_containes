import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a86e32dc4c8a?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-950 mb-3">Shop by Category</h2>
          <p className="text-sm text-ink-500">Find the perfect piece for every occasion.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-72 md:h-96 rounded-2xl overflow-hidden bg-brand-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-xl md:text-2xl text-white">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
