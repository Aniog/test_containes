import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'tile-earrings', title: 'Earrings', path: '/shop?category=earrings' },
  { id: 'tile-necklaces', title: 'Necklaces', path: '/shop?category=necklaces' },
  { id: 'tile-huggies', title: 'Huggies', path: '/shop?category=huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="serif-heading text-2xl md:text-3xl text-espresso">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => {
            const titleId = `tile-title-${tile.id}`;
            return (
              <Link
                key={tile.id}
                to={tile.path}
                className="group relative aspect-[4/5] overflow-hidden bg-clay cursor-pointer"
              >
                <img
                  alt={tile.title}
                  data-strk-img-id={`cat-${tile.id}`}
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3
                    id={titleId}
                    className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-white mb-2"
                  >
                    {tile.title}
                  </h3>
                  <span className="flex items-center gap-1 text-white/0 group-hover:text-white/80 text-xs tracking-[0.15em] uppercase transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
