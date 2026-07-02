import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CATEGORY_MAP = {
  earrings: 'Earrings',
  necklaces: 'Necklaces',
  huggies: 'Huggies',
};

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-near-black">
            Find Your Piece
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['earrings', 'necklaces', 'huggies'].map((slug) => {
            const category = categories.find((c) => c.slug === slug);
            return (
              <Link
                key={slug}
                to={`/shop?category=${slug}`}
                className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-beige/30"
              >
                <img
                  src={category?.image || ''}
                  alt={CATEGORY_MAP[slug]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white tracking-wide-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {CATEGORY_MAP[slug]}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}