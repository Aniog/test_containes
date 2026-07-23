import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on neutral background' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace editorial close up' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings worn on ear' },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-3">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Find Your Shine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.label}`}
              className="group relative aspect-[4/5] overflow-hidden bg-warmgray"
            >
              <img
                data-strk-img-id={`category-${tile.id}`}
                data-strk-img={`[category-label-${tile.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/35 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-label-${tile.id}`}
                  className="text-white font-serif text-2xl md:text-3xl tracking-wide border-b border-transparent group-hover:border-white pb-1 transition-all"
                >
                  {tile.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
