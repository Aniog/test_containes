import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      path: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif-display text-4xl md:text-5xl mb-4">Shop by Category</h2>
        <p className="text-[#6B6560] text-lg">Find your perfect piece</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden rounded-lg aspect-square block"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif-display text-4xl text-white uppercase tracking-wider">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
