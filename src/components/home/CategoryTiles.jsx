import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="text-center">
          <p className="eyebrow">Browse by</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-text">Shop by Category</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-[360px] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
              <div className="absolute inset-x-0 bottom-0 flex items-end p-6">
                <span className="font-serif text-2xl text-white tracking-[0.18em]">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
