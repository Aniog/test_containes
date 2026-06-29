import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const collections = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From subtle studs to statement drops, our earring collection adds the perfect finishing touch.',
    count: '12 pieces',
    query: 'gold earrings collection display warm light luxury jewelry editorial',
    to: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains, and layered looks. Necklaces that frame your face and elevate every neckline.',
    count: '8 pieces',
    query: 'gold necklace pendant collection warm light luxury jewelry',
    to: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'The everyday essential. Sculptural, comfortable, endlessly versatile huggie earrings.',
    count: '6 pieces',
    query: 'gold huggie hoop earrings collection warm light luxury',
    to: '/shop?category=huggies',
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-center">
        <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
          Curated
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-velmora-text font-light">
          Collections
        </h1>
        <div className="w-12 h-px bg-velmora-gold mx-auto mt-5 mb-4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 space-y-6 md:space-y-8">
        {collections.map((col, i) => (
          <Link
            key={col.id}
            to={col.to}
            className="group block relative overflow-hidden aspect-[16/6] md:aspect-[16/5]"
          >
            <img
              data-strk-img-id={`collection-${col.id}`}
              data-strk-img={`[${col.id}-title] ${col.query}`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={col.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora-bg/50 group-hover:bg-velmora-bg/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6">
                <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold">
                  {col.count}
                </span>
                <h2
                  id={`${col.id}-title`}
                  className="font-serif text-3xl md:text-5xl text-velmora-text font-light tracking-[0.06em] mt-2 mb-3"
                >
                  {col.name}
                </h2>
                <p className="text-sm text-velmora-text-muted max-w-md mx-auto hidden md:block">
                  {col.description}
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.12em] uppercase text-velmora-gold border-b border-velmora-gold/40 pb-0.5">
                  Shop Now &rarr;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
