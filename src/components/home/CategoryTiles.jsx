import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useImageLoader } from '@/hooks/useImageLoader';

export default function CategoryTiles() {
  const containerRef = useImageLoader();

  return (
    <section className="bg-ivory py-16 md:py-24" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl font-medium text-espresso md:mb-14">
          Shop by Category
        </h2>

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-warm-gray md:aspect-[3/4]"
            >
              <p id={category.queryId} className="sr-only">
                {category.imageQuery}
              </p>
              <div
                data-strk-bg-id={category.imgId}
                data-strk-bg={`[${category.queryId}] [${category.titleId}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="700"
                role="img"
                aria-label={category.name}
                className="absolute inset-0 bg-warm-gray bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={category.titleId}
                  className="border border-cream/60 bg-cream/90 px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-espresso backdrop-blur-sm transition-all duration-300 group-hover:bg-cream"
                >
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
