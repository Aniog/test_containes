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
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-2">Browse</p>
        <h2 className="serif text-3xl md:text-4xl tracking-[-0.01em]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="category-tile group block">
            <img src={cat.image} alt={cat.name} />
            <div className="category-tile-label">
              <span className="text-white text-lg tracking-[0.15em] font-medium">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
