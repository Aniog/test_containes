import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Shop by category</h2>
      <p className="mt-2 text-sm text-gray-600">Find the perfect piece for every occasion.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-[320px] md:h-[420px] overflow-hidden rounded-2xl bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c2?w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-serif text-xl text-white">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
