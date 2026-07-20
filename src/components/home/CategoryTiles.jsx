import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      label: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    {
      label: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      label: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-2">Find Your Piece</p>
        <h2 className="heading-serif text-4xl md:text-5xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <Link key={index} to={cat.path} className="category-tile group block">
            <img src={cat.image} alt={cat.label} />
            <div className="category-overlay">
              <span className="category-label">{cat.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
