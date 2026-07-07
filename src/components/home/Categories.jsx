import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function Categories() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-deep">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={`cat-${cat.id}-b8e${i}`}
                data-strk-img={`[${cat.id}-label] ${cat.description} jewelry gold`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 id={`${cat.id}-label`} className="font-serif text-heading-md md:text-heading-lg text-white mb-2">
                  {cat.name}
                </h3>
                <span className="font-sans text-xs tracking-wider uppercase text-white/70 border-b border-white/40 pb-0.5 group-hover:text-white group-hover:border-velmora-gold transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
