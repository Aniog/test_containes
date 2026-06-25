import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-12 text-center md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            Find your forever piece.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {CATEGORIES.map((c, i) => (
            <Link
              key={c.slug}
              to={`/shop?cat=${c.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden bg-ivory"
            >
              <img
                alt={c.name}
                data-strk-img-id={`cat-${c.slug}-8f3d`}
                data-strk-img={`[cat-${c.slug}-name] [cat-${c.slug}-desc] gold jewelry editorial close up warm light`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-champagne">
                  0{i + 1}
                </p>
                <h3
                  id={`cat-${c.slug}-name`}
                  className="mt-3 font-serif text-3xl font-light text-cream md:text-4xl"
                >
                  {c.name}
                </h3>
                <p
                  id={`cat-${c.slug}-desc`}
                  className="mt-2 max-w-[80%] text-sm text-cream/80"
                >
                  {c.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-cream transition-opacity">
                  Discover
                  <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
