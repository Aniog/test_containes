import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTile = ({ title, to, image }) => {
  return (
    <Link to={to} className="group relative overflow-hidden rounded-2xl aspect-[4x5] md:aspect-[3x4]">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-2xl md:text-3xl text-white tracking-wide">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryTile;
