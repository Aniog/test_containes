import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/shop?category=Earrings'
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      link: '/shop?category=Necklaces'
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      link: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">Shop by Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="relative group overflow-hidden aspect-square md:aspect-[4/5]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <h3 className="absolute bottom-8 left-1/2 -translate-x-1/2 font-serif text-3xl text-white uppercase tracking-wider">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
