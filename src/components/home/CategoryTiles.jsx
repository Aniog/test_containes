import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { title: 'Earrings', href: '/shop?category=Earrings', bgId: 'cat-tile-earrings-d4e5f6' },
  { title: 'Necklaces', href: '/shop?category=Necklaces', bgId: 'cat-tile-necklaces-e7f8a9' },
  { title: 'Huggies', href: '/shop?category=Huggies', bgId: 'cat-tile-huggies-b1c2d3' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 tracking-wide">Shop by Category</h2>
        <p className="text-velmora-text-muted text-center text-sm mb-12">
          Find your next signature piece.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.title}
              to={tile.href}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-velmora-gold-light"
            >
              <div
                data-strk-bg-id={tile.bgId}
                data-strk-bg={`[cat-tile-${tile.title.toLowerCase()}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/40 transition-colors duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/70 via-transparent to-transparent" />
              <h3
                id={`cat-tile-${tile.title.toLowerCase()}`}
                className="absolute bottom-6 left-6 font-serif text-2xl md:text-3xl text-white tracking-wide"
              >
                {tile.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
