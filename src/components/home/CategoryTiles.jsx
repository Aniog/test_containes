import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'EARRINGS',
    path: '/shop?category=earrings',
    query: 'gold earrings collection jewelry display',
  },
  {
    id: 'cat-necklaces',
    name: 'NECKLACES',
    path: '/shop?category=necklaces',
    query: 'gold necklaces collection jewelry display',
  },
  {
    id: 'cat-huggies',
    name: 'HUGGIES',
    path: '/shop?category=huggies',
    query: 'gold huggie earrings collection jewelry display',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={`[${cat.id}-label]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="600"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3
                    id={`${cat.id}-label`}
                    className="font-serif text-2xl md:text-3xl text-cream tracking-widest-xl mb-4"
                  >
                    {cat.name}
                  </h3>
                  <span className="inline-block border border-cream/60 text-cream text-xs tracking-widest uppercase px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
