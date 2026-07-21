import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    image: 'https://placehold.co/800x1000/f7f5f2/1c1917?text=Earrings',
    href: '/shop?category=Earrings',
  },
  {
    name: 'Necklaces',
    image: 'https://placehold.co/800x1000/f7f5f2/1c1917?text=Necklaces',
    href: '/shop?category=Necklaces',
  },
  {
    name: 'Huggies',
    image: 'https://placehold.co/800x1000/f7f5f2/1c1917?text=Huggies',
    href: '/shop?category=Huggies',
  },
];

const Categories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <h2 className="font-serif text-3xl md:text-4xl text-ink">Shop by category</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative h-64 md:h-80 overflow-hidden rounded-2xl bg-surface"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/30" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-serif text-xl text-surface">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
