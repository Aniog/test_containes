import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      link: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      link: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
        <div className="divider-hairline w-16 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="relative group overflow-hidden aspect-[4/5] block"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white tracking-[0.2em] uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
