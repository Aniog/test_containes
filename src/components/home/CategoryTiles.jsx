import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const TILES = [
  {
    id: 'earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    blurb: 'drops · cuffs · studs',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    blurb: 'delicate · layered · one-of-a-kind',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    blurb: 'the everyday earring',
  },
];

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-4">Shop by Category</p>
          <h2
            id="categories-title"
            className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05]"
          >
            Three ways in
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((tile, i) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="relative block aspect-[4/5] overflow-hidden bg-sand group"
            >
              <img
                alt={tile.label}
                data-strk-img-id={`tile-${tile.id}`}
                data-strk-img={`[tile-${tile.id}-label] [tile-${tile.id}-blurb] [categories-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/10 to-ink/55 pointer-events-none transition-opacity duration-500 group-hover:via-ink/20" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                <p
                  id={`tile-${tile.id}-label`}
                  className="font-serif text-cream text-3xl md:text-4xl"
                >
                  {tile.label}
                </p>
                <p
                  id={`tile-${tile.id}-blurb`}
                  className="editorial text-cream/85 mt-1 text-sm md:text-base italic"
                >
                  {tile.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-cream text-[0.7rem] tracking-[0.18em] uppercase translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}