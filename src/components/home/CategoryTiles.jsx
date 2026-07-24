import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Earrings',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=900&q=80',
    href: '/shop?category=Earrings',
  },
  {
    title: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
    href: '/shop?category=Necklaces',
  },
  {
    title: 'Huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=900&q=80',
    href: '/shop?category=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.title}
            to={category.href}
            className="group relative h-[360px] overflow-hidden rounded-sm border border-border"
          >
            <img src={category.image} alt={category.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="product-name text-white">{category.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
