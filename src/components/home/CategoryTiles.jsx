import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    path: '/shop?category=Earrings',
    img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  },
  {
    name: 'Necklaces',
    path: '/shop?category=Necklaces',
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
  {
    name: 'Huggies',
    path: '/shop?category=Huggies',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  },
];

const CategoryTiles = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">Find Your Form</p>
        <h2 className="serif text-4xl md:text-5xl tracking-[0.02em] mt-1">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="category-tile group">
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="label">
              <span className="label-text">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
