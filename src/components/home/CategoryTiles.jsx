import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PLACEHOLDER_IMG } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';

const tiles = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    copy: 'Sculptural drops & cuffs',
    query: 'Earrings',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    copy: 'Chains & crystal pendants',
    query: 'Necklaces',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    copy: 'Everyday golden domes',
    query: 'Huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} id="categories" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-28">
      <SectionHeading
        eyebrow="Shop by Category"
        title="Find Your Signature"
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
        {tiles.map((tile, index) => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.query}`}
            className="reveal group relative block aspect-[3/4] overflow-hidden border border-umber bg-noir md:aspect-[3/4]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              data-strk-img-id={`${tile.id}-t1`}
              data-strk-img={`[${tile.id}-copy] [${tile.id}-label] gold jewelry collection on dark neutral background`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src={PLACEHOLDER_IMG}
              alt={`${tile.label} collection`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/10 to-transparent transition-opacity duration-500 group-hover:from-noir/90" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-7">
              <div>
                <p
                  id={`${tile.id}-copy`}
                  className="text-[10px] font-sans uppercase tracking-[0.24em] text-goldlight opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  {tile.copy}
                </p>
                <h3
                  id={`${tile.id}-label`}
                  className="mt-1.5 font-serif text-2xl font-medium uppercase tracking-[0.2em] text-ivory md:text-3xl"
                >
                  {tile.label}
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-ivory/25 text-ivory transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-noir">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
