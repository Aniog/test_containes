import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', imgDesc: 'Gold earrings display' },
    { name: 'Necklaces', path: '/shop?category=necklaces', imgDesc: 'Gold necklace lifestyle' },
    { name: 'Huggies', path: '/shop?category=huggies', imgDesc: 'Gold huggie earrings product' }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12" ref={containerRef}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
                <Link 
                    key={idx} 
                    to={cat.path}
                    className="relative aspect-square flex items-center justify-center group overflow-hidden bg-secondary"
                >
                    <img
                        data-strk-img-id={`cat-tile-${idx}`}
                        data-strk-img={`[cat-name-${idx}] ${cat.imgDesc}`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="800"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black/40 to-transparent">
                        <span id={`cat-name-${idx}`} className="brand-title text-white text-base md:text-lg block text-center">
                            {cat.name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  );
};

export default CategoryTiles;
