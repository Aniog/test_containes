import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategories } from '../data/products';

export default function Collections() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-4">Collections</h1>
        <p className="text-velmora-warm-gray text-sm mb-12 max-w-md">
          Explore our curated collections — each piece designed to be layered, stacked, and treasured.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shopCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-velmora-stone overflow-hidden"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`collections-${cat.id}`}
                data-strk-img={`[col-cat-${cat.id}] gold jewelry collection`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={`col-cat-${cat.id}`} className="font-serif text-2xl text-white font-medium">{cat.name}</h3>
                <p className="text-white/60 text-xs font-sans tracking-widest uppercase mt-1">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
