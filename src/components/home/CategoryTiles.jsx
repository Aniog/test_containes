import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings editorial jewelry', ratio: '4x3', width: '800', bgId: 'cat-tile-earrings' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace editorial jewelry', ratio: '4x3', width: '800', bgId: 'cat-tile-necklaces' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings', ratio: '4x3', width: '800', bgId: 'cat-tile-huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe text-center mb-3">
          Shop By
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center text-espresso mb-14">
          Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={tile.bgId}
                data-strk-bg={`[cat-label-${tile.id}] ${tile.query}`}
                data-strk-bg-ratio={tile.ratio}
                data-strk-bg-width={tile.width}
              />
              <div className="absolute inset-0 bg-velvet/30 group-hover:bg-velvet/15 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-label-${tile.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
