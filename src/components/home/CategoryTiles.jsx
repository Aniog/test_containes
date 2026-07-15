import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', label: 'Earrings', imgId: 'cat-earrings' },
  { id: 'necklaces', label: 'Necklaces', imgId: 'cat-necklaces' },
  { id: 'huggies', label: 'Huggies', imgId: 'cat-huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
      <div className="text-center mb-12 lg:mb-16">
        <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Explore</p>
        <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={`/shop?cat=${tile.label}`}
            className="block group relative aspect-[4/5] bg-sand/30 overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-${tile.imgId}`}
              data-strk-img={`[cat-label-${tile.id}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={tile.label}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-softblack/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-label-${tile.id}`}
                className="font-serif text-2xl md:text-3xl text-cream tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-2"
              >
                {tile.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
