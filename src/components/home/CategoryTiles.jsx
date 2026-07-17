import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { category: 'Earrings', query: 'Earrings', caption: 'Shop Earrings' },
  { category: 'Necklaces', query: 'Necklaces', caption: 'Shop Necklaces' },
  { category: 'Huggies', query: 'Huggies', caption: 'Shop Huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="section-padding text-center mb-14">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-smoke mb-3">Curated For You</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-6 md:px-12 lg:px-20">
        {tiles.map((tile) => (
          <Link
            key={tile.category}
            to={`/shop?category=${tile.query}`}
            className="relative aspect-[4/5] md:aspect-[3/4] group overflow-hidden"
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id={`cat-tile-${tile.category.toLowerCase()}`}
              data-strk-bg={`[cat-label-${tile.category.toLowerCase()}]`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-brand-ink/30 group-hover:bg-brand-ink/15 transition-colors duration-500" />
            <span id={`cat-label-${tile.category.toLowerCase()}`} className="hidden">{tile.category} gold jewelry editorial</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                {tile.caption}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}