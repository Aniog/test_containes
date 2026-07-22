import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    to: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    to: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
    to: '/shop?category=Huggies',
  },
];

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-accent mb-2">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl text-ink">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.to}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-80" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-serif text-xl md:text-2xl text-surface tracking-widest uppercase">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
