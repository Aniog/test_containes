import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      id: 1,
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
      link: '/shop?category=Earrings',
    },
    {
      id: 2,
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      link: '/shop?category=Necklaces',
    },
    {
      id: 3,
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&h=600&fit=crop',
      link: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">Shop by Category</h2>
        <div className="hairline w-24 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="relative group overflow-hidden cursor-pointer block"
          >
            <div className="aspect-square overflow-hidden bg-velmora-warm">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay with Label */}
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <h3 className="font-serif text-white text-3xl md:text-4xl tracking-widest uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
