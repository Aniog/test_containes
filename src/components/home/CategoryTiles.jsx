import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-warm overflow-hidden"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wider mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-cream/70 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
