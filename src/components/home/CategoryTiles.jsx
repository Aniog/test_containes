import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', path: '/shop?category=Earrings' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80', path: '/shop?category=Necklaces' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80', path: '/shop?category=Huggies' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="relative group overflow-hidden aspect-square bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white font-serif text-3xl md:text-4xl tracking-wider">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
