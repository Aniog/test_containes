import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const collections = [
  {
    id: 'everyday-essentials',
    title: 'Everyday Essentials',
    subtitle: 'The pieces you never take off',
    query: 'gold everyday jewelry minimal elegant warm',
    to: '/shop',
  },
  {
    id: 'gift-sets',
    title: 'Gift Sets',
    subtitle: 'Curated, boxed, and ready to give',
    query: 'jewelry gift box set gold elegant luxury packaging',
    to: '/shop',
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    subtitle: 'Fresh designs, same Velmora quality',
    query: 'new gold jewelry collection elegant modern',
    to: '/shop',
  },
];

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 pt-8">
          <h1 className="section-title mb-3">Collections</h1>
          <p className="section-subtitle">Curated edits for every occasion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={col.to}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={`collection-${col.id}`}
                data-strk-img={col.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={col.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="font-serif text-2xl md:text-3xl text-sand-50 tracking-wide mb-1">
                  {col.title}
                </h2>
                <p className="font-sans text-xs text-sand-50/60 tracking-wide uppercase">
                  {col.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
