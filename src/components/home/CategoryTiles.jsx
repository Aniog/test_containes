import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings collection flatlay',
    link: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklace collection flatlay',
    link: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection flatlay',
    link: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif-heading text-3xl md:text-4xl text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.link}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                data-strk-bg-id={`${tile.id}-bg`}
                data-strk-bg={`[${tile.id}-label] [categories-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 id={`${tile.id}-label`} className="product-name text-white text-xl md:text-2xl tracking-[0.2em] mb-3">
                    {tile.name}
                  </h3>
                  <span className="text-white/80 text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white/60 pb-0.5">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
