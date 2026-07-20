import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const TILES = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/collections/earrings',
    query:
      'editorial flat lay of gold earrings on linen, warm soft light, premium still life, top down',
    size: 'large', // first tile spans 2 rows on desktop
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/collections/necklaces',
    query:
      'editorial flat lay of gold necklaces draped on linen, soft warm light, premium still life',
    size: 'small',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/collections/huggies',
    query:
      'editorial flat lay of gold huggie hoop earrings on linen, soft warm light, premium still life',
    size: 'small',
  },
];

function Tile({ tile, className }) {
  return (
    <Link
      to={tile.href}
      className={`group relative block overflow-hidden bg-espresso ${className}`}
      aria-label={`Shop ${tile.label}`}
    >
      <div
        data-strk-img-id={tile.id}
        data-strk-img={tile.query}
        data-strk-img-ratio="3x4"
        data-strk-img-width="800"
        className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/70" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
        <div className="flex items-end justify-between">
          <h3 className="font-serif text-3xl font-light text-bone sm:text-4xl md:text-5xl">
            {tile.label}
          </h3>
          <ArrowUpRight
            className="h-5 w-5 -translate-x-1 translate-y-1 text-bone opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            strokeWidth={1.25}
          />
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-bone/80">
          Shop the collection
        </p>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);
  const headerRef = useReveal();

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-bone py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="mb-10 md:mb-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
            Shop by category
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso sm:text-5xl">
            Find your forever piece
          </h2>
        </div>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 md:gap-4"
        >
          {/* Mobile/Tablet: stacked single column; Desktop: large first tile */}
          <Tile
            tile={TILES[0]}
            className="aspect-[3/4] md:aspect-auto md:row-span-2 md:min-h-[640px]"
          />
          <Tile tile={TILES[1]} className="aspect-[3/4] md:aspect-auto md:min-h-[312px]" />
          <Tile tile={TILES[2]} className="aspect-[3/4] md:aspect-auto md:min-h-[312px]" />
        </div>
      </div>
    </section>
  );
}
