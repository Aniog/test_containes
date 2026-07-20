import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', id: 'cat-earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', path: '/shop?category=earrings', id: 'cat-huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`[${cat.id}-name] jewelry luxury editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                id={`${cat.id}-name`}
                className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase transition-opacity duration-500"
              >
                {cat.name}
              </h3>
            </div>
            {/* Hover Label Effect */}
            <div className="absolute bottom-10 left-12 right-12 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white text-xs uppercase tracking-[0.2em] border-b border-white pb-1">Explore Collection</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
EOF > /workspace/my-app/src/components/home/CategoryTiles.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', id: 'cat-earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', path: '/shop?category=earrings', id: 'cat-huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <img
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`[${cat.id}-name] jewelry luxury editorial`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                id={`${cat.id}-name`}
                className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase transition-opacity duration-500"
              >
                {cat.name}
              </h3>
            </div>
            {/* Hover Label Effect */}
            <div className="absolute bottom-10 left-12 right-12 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="text-white text-xs uppercase tracking-[0.2em] border-b border-white pb-1">Explore Collection</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
