import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://placehold.co/800x800/F5F0EB/C9A96E?text=Earrings',
      path: '/shop?category=Earrings'
    },
    {
      name: 'Necklaces',
      image: 'https://placehold.co/800x800/F5F0EB/C9A96E?text=Necklaces',
      path: '/shop?category=Necklaces'
    },
    {
      name: 'Huggies',
      image: 'https://placehold.co/800x800/F5F0EB/C9A96E?text=Huggies',
      path: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-luxury">
        <h2 className="font-serif text-4xl text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden aspect-square block"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white font-serif text-3xl uppercase tracking-widest">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
