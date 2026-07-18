import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'category-earrings',
    label: 'Earrings',
    slug: 'earrings',
    imgId: 'cat-earrings-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'category-necklaces',
    label: 'Necklaces',
    slug: 'necklaces',
    imgId: 'cat-necklaces-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'category-huggies',
    label: 'Huggies',
    slug: 'huggies',
    imgId: 'cat-huggies-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal text-center mb-10 md:mb-14">
        Shop by Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map(tile => (
          <Link
            key={tile.id}
            to={`/shop?category=${tile.slug}`}
            className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden"
          >
            <img
              alt={tile.label}
              data-strk-img-id={tile.imgId}
              data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {tile.label}
              </span>
            </div>
            <span className="hidden" id={tile.titleId}>{tile.label}</span>
            <span className="hidden" id={tile.descId}>gold jewelry</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
