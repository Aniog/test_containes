import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', path: '/shop?category=earrings' },
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80', path: '/shop?category=necklaces' },
    { name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', path: '/shop?category=huggies' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
        <div className="hairline w-24 mx-auto mb-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative h-96 overflow-hidden cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-velmora-charcoal/30 group-hover:bg-velmora-charcoal/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-widest group-hover:scale-110 transition-transform duration-300">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}