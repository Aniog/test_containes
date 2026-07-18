import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { label: 'Earrings', href: '/shop?category=Earrings', bgId: 'cat-earrings', query: '[cat-earrings-label] gold jewelry' },
  { label: 'Necklaces', href: '/shop?category=Necklaces', bgId: 'cat-necklaces', query: '[cat-necklaces-label] gold jewelry' },
  { label: 'Huggies', href: '/shop?category=Huggies', bgId: 'cat-huggies', query: '[cat-huggies-label] gold jewelry' },
];

export default function CategoryTiles() {
  const [hovered, setHovered] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="container-max section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3">Discover</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.bgId}
            to={tile.href}
            className="group relative aspect-[4/5] overflow-hidden"
            onMouseEnter={() => setHovered(tile.bgId)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={tile.bgId}
              data-strk-bg={tile.query}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="600"
            />
            <div className={`absolute inset-0 transition-all duration-500 ${
              hovered === tile.bgId ? 'bg-espresso/30' : 'bg-espresso/20'
            }`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`${tile.bgId}-label`}
                className={`font-serif text-2xl md:text-3xl tracking-wider text-warmwhite transition-all duration-500 ${
                  hovered === tile.bgId ? 'opacity-100 translate-y-0' : 'opacity-80 -translate-y-1'
                }`}
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
