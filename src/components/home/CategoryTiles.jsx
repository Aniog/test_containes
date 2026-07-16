import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Earrings', slug: 'earrings', bg: 'from-velmora-charcoal/90 to-velmora-dark', accent: '/shop?category=earrings' },
  { name: 'Necklaces', slug: 'necklaces', bg: 'from-velmora-dark/90 to-velmora-charcoal', accent: '/shop?category=necklaces' },
  { name: 'Huggies', slug: 'huggies', bg: 'from-stone-800/90 to-velmora-dark', accent: '/shop?category=huggies' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="velmora-container">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] tracking-widest uppercase text-velmora-taupe mb-3">
            Curated For You
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={cat.accent}
              className="group relative aspect-[4/3] md:aspect-[3/4] overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} flex items-center justify-center`}>
                <span className="font-serif text-velmora-gold/20 text-8xl italic">V</span>
              </div>
              <div className="absolute inset-0 bg-velmora-dark/0 group-hover:bg-velmora-dark/20 transition-colors duration-500 flex items-center justify-center">
                <span className="font-serif text-3xl md:text-4xl text-white tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="font-serif text-xl md:text-2xl text-white tracking-wide">
                  {cat.name}
                </h3>
                <span className="font-sans text-[11px] tracking-widest uppercase text-white/50 group-hover:text-white/80 transition-colors mt-1 inline-block">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
