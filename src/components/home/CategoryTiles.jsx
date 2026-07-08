import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { label: 'Earrings', slug: 'Earrings' },
  { label: 'Necklaces', slug: 'Necklaces' },
  { label: 'Huggies', slug: 'Huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] rounded overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-parchment via-stone to-warmgray/30 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <span className="font-serif text-3xl text-gold/50">V</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <span className="font-serif text-2xl text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
