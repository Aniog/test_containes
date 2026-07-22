import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', title: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', title: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', title: 'Huggies', slug: 'huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <h2 className="section-heading text-3xl md:text-4xl text-velvet-950 text-center mb-2">
          Shop by Category
        </h2>
        <p className="text-sm text-velvet-500 text-center font-sans font-light mb-12 md:mb-16">
          Find your next favorite piece
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] bg-velvet-100 rounded-sm overflow-hidden"
            >
              <img
                alt={tile.title}
                data-strk-img-id={`cat-tile-${tile.id}-d3f8`}
                data-strk-img={`[cat-label-${tile.id}] demi-fine gold jewelry category`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velvet-950/20 group-hover:bg-velvet-950/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${tile.id}`}
                  className="text-white text-2xl md:text-3xl tracking-widest uppercase font-serif font-semibold opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  {tile.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
