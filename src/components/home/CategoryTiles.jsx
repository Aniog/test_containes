import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = () => {
  const categories = [
    {
      id: 'earrings',
      label: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      to: '/shop?category=earrings',
    },
    {
      id: 'necklaces',
      label: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      to: '/shop?category=necklaces',
    },
    {
      id: 'huggies',
      label: 'Huggies',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
      to: '/shop?category=huggies',
    },
  ];

  return (
    <section className="section bg-[#F8F5F1]">
      <div className="container">
        <div className="mb-8">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">Find Your Form</span>
          <h2 className="font-serif text-3xl mt-1">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.to} className="category-tile group block">
              <img src={cat.image} alt={cat.label} />
              <div className="category-tile-label">
                <span>{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;