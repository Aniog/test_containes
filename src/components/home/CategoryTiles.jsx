import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c11ab9f6a?w=800&q=80',
    to: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&q=80',
    to: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    to: '/shop?category=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.to}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-brand-warm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-6">
                <span className="font-serif text-xl md:text-2xl text-white tracking-widest uppercase">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
