import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    path: '/shop?category=Earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    path: '/shop?category=Necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
    path: '/shop?category=Huggies',
  },
];

const CategoryTiles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <Link key={cat.id} to={cat.path} className="category-tile group">
          <img src={cat.image} alt={cat.label} loading="lazy" />
          <div className="category-tile-label">
            <span>{cat.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryTiles;