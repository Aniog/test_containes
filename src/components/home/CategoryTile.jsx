import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTile = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl"
    >
      <img
        src={category.image}
        alt={category.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-2xl md:text-3xl text-white tracking-widest drop-shadow-md">
          {category.name}
        </span>
      </div>
    </Link>
  );
};

export default CategoryTile;
