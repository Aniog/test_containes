import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-gold">Explore</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-taupe/30"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[${category.titleId}] [categories-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={category.titleId}
                  className="translate-y-4 font-serif text-3xl text-cream opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <h2 id="categories-title" className="sr-only">
        Shop by Category
      </h2>
    </section>
  );
}
