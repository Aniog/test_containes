import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTile = ({ title, image, category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category)}`}
      className="category-tile group block relative aspect-[4/3] rounded-sm overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="category-label absolute bottom-6 left-6 right-6 py-3 px-5 bg-white/90 text-center">
        <span className="font-serif text-lg tracking-[0.08em] text-[#2C2823]">{title}</span>
      </div>
    </Link>
  );
};

export default CategoryTile;
