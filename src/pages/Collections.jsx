import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Collections = () => {
  return (
    <div className="bg-brand-bg">
      <div className="container-editorial section-padding">
        <h1 className="font-serif text-4xl text-brand-ink">Collections</h1>
        <p className="mt-2 text-sm text-brand-muted">Curated edits for every moment.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <img alt={category.label} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={category.image} />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl text-white drop-shadow-md">{category.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
