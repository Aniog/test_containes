import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const images = [
    'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f6a?w=800&q=80',
    'https://images.unsplash.com/photo-1599643478518-a86e2dc20736?w=800&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">Curated For You</p>
          <h2 className="font-serif text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-base-muted"
            >
              <img
                src={images[index]}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 group-hover:opacity-75" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1">{category.name}</h3>
                <p className="text-xs text-white/80 tracking-wide">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
