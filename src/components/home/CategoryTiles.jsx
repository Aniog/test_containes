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
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      link: '/shop?category=Necklaces'
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      link: '/shop?category=Huggies'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
          Shop by Category
        </h2>
        <div className="mt-4 w-16 h-px bg-amber-700 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group relative h-96 overflow-hidden cursor-pointer block"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-3xl font-light tracking-[0.2em] text-white font-['Cormorant_Garamond'] mb-4">
                  {category.name}
                </h3>
                <div className="w-12 h-px bg-white mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
