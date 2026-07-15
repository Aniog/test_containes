import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.15em] text-muted uppercase mb-2">Find Your Perfect Piece</p>
        <h2 className="font-serif text-3xl md:text-4xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            to={category.path}
            className="category-tile aspect-[4/3] block"
          >
            <img src={category.image} alt={category.name} />
            <div className="overlay" />
            <span className="label">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
