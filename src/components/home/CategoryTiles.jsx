import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StockBackground } from '@/components/ui/StockImage.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings editorial jewelry photography warm dark background' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace layered editorial jewelry photography warm light' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings on ear closeup editorial jewelry photography' },
];

export default function CategoryTiles() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">Curated</p>
          <h2 className="font-serif text-3xl font-light md:text-4xl lg:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.label}`}
              className="group relative aspect-[3/4] overflow-hidden bg-surface"
            >
              <StockBackground
                id={`category-bg-${tile.id}`}
                query={`[category-label-${tile.id}]`}
                ratio="3x4"
                width="700"
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                containerRef={sectionRef}
              >
                <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/40" />
              </StockBackground>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${tile.id}`}
                  className="border-b border-transparent pb-1 font-serif text-2xl text-white transition-all duration-400 group-hover:border-white md:text-3xl"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
