import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-velmora-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden aspect-[4/5] bg-velmora-cream"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-serif tracking-wider uppercase">
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
