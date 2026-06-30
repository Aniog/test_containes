import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const images = [
    'https://images.unsplash.com/photo-1535632066927-ab7c11ab9d68?w=800&q=80',
    'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
    'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">Shop by Category</h2>
          <div className="w-12 h-px bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={images[index]}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal-900/20 group-hover:bg-charcoal-900/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-cream-50 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-cream-200 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
