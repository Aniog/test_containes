import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = [
  { name: 'Earrings', path: '/shop?category=Earrings', imgId: 'cat-img-1' },
  { name: 'Necklaces', path: '/shop?category=Necklaces', imgId: 'cat-img-2' },
  { name: 'Huggies', path: '/shop?category=Huggies', imgId: 'cat-img-3' },
];

const CategoryTiles = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

  return (
    <section ref={containerRef} className="py-12 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat.name}
            to={cat.path}
            className="relative aspect-square md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden group"
          >
            <img 
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
              data-strk-img={`[cat-title-${cat.name}] jewelry category gold accessory editorial`}
              data-strk-img-id={cat.imgId}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <div className="overflow-hidden mb-4">
                    <h3 id={`cat-title-${cat.name}`} className="text-3xl md:text-4xl font-serif mb-2 translate-y-0 group-hover:-translate-y-1 transition-transform duration-700">
                        {cat.name}
                    </h3>
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700 border-b border-white pb-1">
                    Explore Series
                </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
