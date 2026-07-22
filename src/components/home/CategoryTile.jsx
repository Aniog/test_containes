import React from "react";
import { Link } from "react-router-dom";

const CategoryTile = ({ category }) => {
  return (
    <Link to={`/shop?category=${category.id}`} className="group relative block aspect-[3/4] overflow-hidden rounded-sm">
      <img
        src={category.image}
        alt={category.label}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-xl sm:text-2xl text-white tracking-wide">{category.label}</span>
      </div>
    </Link>
  );
};

export default CategoryTile;
