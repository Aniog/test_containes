import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    note: 'Cuffs, drops & statements',
    textId: 'cat-tile-earrings-label',
    imgId: 'cat-tile-earrings-b74e20',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    note: 'Chains, charms & layers',
    textId: 'cat-tile-necklaces-label',
    imgId: 'cat-tile-necklaces-52c8af',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    note: 'Everyday hoops & minis',
    textId: 'cat-tile-huggies-label',
    imgId: 'cat-tile-huggies-d9136b',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Curated For You</p>
          <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">Shop by Category</h2>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative block overflow-hidden bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            >
              <div className="aspect-[4/5] md:aspect-[3/4]">
                <img
                  data-strk-img-id={tile.imgId}
                  data-strk-img={`[${tile.textId}] gold jewelry still life on warm neutral linen, editorial luxury product photography, soft directional light`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tile.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
                <div>
                  <h3
                    id={tile.textId}
                    className="font-serif text-2xl font-light tracking-[0.12em] text-ivory md:text-3xl"
                  >
                    {tile.label.toUpperCase()}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs tracking-wide text-ivory/75 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100 md:opacity-0">
                    {tile.note}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-espresso">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
