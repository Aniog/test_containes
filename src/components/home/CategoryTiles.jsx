import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  { id: 'cat-earrings', name: 'Earrings', path: '/shop?category=earrings', query: 'gold earrings collection flatlay' },
  { id: 'cat-necklaces', name: 'Necklaces', path: '/shop?category=necklaces', query: 'gold necklaces collection flatlay' },
  { id: 'cat-huggies', name: 'Huggies', path: '/shop?category=huggies', query: 'gold huggie earrings collection' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Find your style</p>
          <h2 className="section-title mt-3">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                data-strk-bg-id={cat.id}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-serif text-3xl md:text-4xl tracking-wider mb-2">
                    {cat.name}
                  </h3>
                  <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
                    Shop Now
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
