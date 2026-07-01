import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      to: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      to: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      to: '/shop?category=Huggies',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Link key={cat.name} to={cat.to} className="category-tile group block aspect-[16/10] overflow-hidden">
          <img
            src={cat.image}
            alt={cat.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="category-label">
            <span className="font-serif text-2xl tracking-[0.05em]">{cat.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTiles;