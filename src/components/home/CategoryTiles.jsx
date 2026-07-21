import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    },
  ];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl lg:text-4xl mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-[#8B7355] mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden aspect-[4/5] bg-[#F5F0EB]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2A2520] opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl lg:text-3xl text-[#FAF8F5] tracking-[0.2em] uppercase">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
