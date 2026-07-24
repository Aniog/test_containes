import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-light mb-4 tracking-wide">Shop by Category</h2>
        <div className="w-16 h-px bg-gold mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="relative group overflow-hidden aspect-[4/3] bg-cream"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/50 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-cream tracking-[0.25em] group-hover:scale-105 transition-transform duration-300">
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
