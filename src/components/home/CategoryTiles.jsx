import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', imgLabel: 'dainty gold earrings on white background' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', imgLabel: 'elegant gold necklaces layered background' },
    { name: 'Huggies', path: '/shop?category=Huggies', imgLabel: 'chunky gold huggie earrings close up' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.path} className="group relative aspect-square overflow-hidden bg-accent">
            <img
              data-strk-img-id={`cat-img-${cat.name}`}
              data-strk-img={cat.imgLabel}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {cat.name}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 md:opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] uppercase letter-spacing-wide border-b border-white pb-1">Browse Category</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
