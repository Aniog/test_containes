import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

const TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    blurb: 'Statement drops & everyday studs',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    blurb: 'Chains, pendants & layers',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    blurb: 'The stackable essential',
  },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
      <Reveal>
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            The Collection
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-espresso md:text-5xl">
            Shop by <span className="italic">Category</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 md:mt-14 md:gap-7">
        {TILES.map((tile, i) => (
          <Reveal key={tile.id} delay={i * 100}>
            <Link
              to={`/shop?category=${tile.id}`}
              className="group relative block overflow-hidden bg-ivory"
            >
              <span id={`cat-${tile.id}-label`} className="sr-only">
                {tile.label}, {tile.blurb}, 18k gold demi-fine jewelry, warm editorial photography
              </span>
              <div className="aspect-[3/4] w-full">
                <StrkImage
                  imgId={`cat-tile-${tile.id}`}
                  query={`[cat-${tile.id}-label]`}
                  ratio="3x4"
                  width={700}
                  alt={tile.label}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="font-serif text-2xl text-cream md:text-3xl">{tile.label}</p>
                  <p className="mt-1 max-h-0 overflow-hidden text-xs text-cream/80 transition-all duration-500 group-hover:max-h-8">
                    {tile.blurb}
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center border border-cream/40 text-cream transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
