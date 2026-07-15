import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      path: '/shop?category=Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      path: '/shop?category=Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-2">Find Your Form</p>
        <h2 className="text-4xl md:text-5xl font-serif">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="category-tile group">
            <img src={cat.image} alt={cat.name} />
            <div className="category-label">{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
