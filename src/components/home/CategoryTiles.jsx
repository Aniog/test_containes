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
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
      path: '/shop?category=Huggies',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-2">Browse</p>
        <h2 className="heading-serif text-3xl md:text-4xl">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="category-tile group"
          >
            <img src={category.image} alt={category.name} />
            <div className="category-tile-label">
              <span className="product-name text-white text-xl tracking-[0.2em]">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
