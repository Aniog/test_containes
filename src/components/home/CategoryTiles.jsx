import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings', path: '/shop?category=earrings', strkId: 'cat-tile-earrings' },
  { id: 'necklaces', name: 'Necklaces', path: '/shop?category=necklaces', strkId: 'cat-tile-necklaces' },
  { id: 'huggies', name: 'Huggies', path: '/shop?category=huggies', strkId: 'cat-tile-huggies' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="group relative aspect-square overflow-hidden bg-secondary"
          >
            <img
              data-strk-img-id={cat.strkId}
              data-strk-img={`[cat-name-${cat.id}] gold jewelry collection`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 id={`cat-name-${cat.id}`} className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                {cat.name}
              </h3>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-px bg-white/60 group-hover:w-20 transition-all duration-500" />
            </div>
            {/* Visual Label (always visible or just on hover? Prompt says "label on hover") */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
