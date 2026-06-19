import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CategoryTiles() {
  const [sectionRef, revealed] = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      aria-labelledby="category-heading"
    >
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="category-heading" className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4x5] md:aspect-[3x4] overflow-hidden"
              aria-label={`Shop ${cat.name}`}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-product uppercase"
                >
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
