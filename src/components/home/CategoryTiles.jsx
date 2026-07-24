import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Earrings',
    slug: 'earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  },
  {
    id: 2,
    name: 'Necklaces',
    slug: 'necklaces',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80'
  },
  {
    id: 3,
    name: 'Huggies',
    slug: 'huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80'
  }
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.slug}`}
            className="group relative overflow-hidden aspect-[4/5] bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-3xl text-white tracking-[0.2em] transform transition-transform duration-300 group-hover:scale-110">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
