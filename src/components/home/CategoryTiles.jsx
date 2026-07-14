import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { title: 'Earrings', slug: 'earrings' },
    { title: 'Necklaces', slug: 'necklaces' },
    { title: 'Huggies', slug: 'huggies' }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            to={`/shop?category=${cat.title}`}
            className="group relative aspect-square overflow-hidden bg-muted flex items-center justify-center"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.slug}`}
              data-strk-img={`luxury gold ${cat.title} jewelry on neutral background editorial`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />

            <div className="relative z-10 text-center">
              <h3 id={`cat-title-${idx}`} className="text-white text-3xl font-light italic tracking-wide group-hover:scale-110 transition-transform duration-500">
                {cat.title}
              </h3>
              <p className="text-white/0 group-hover:text-white/100 transition-all duration-500 text-[10px] uppercase tracking-[0.3em] font-medium mt-2">
                Discover
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
