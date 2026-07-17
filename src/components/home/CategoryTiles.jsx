import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  { id: 'earrings', name: 'Earrings', imgId: 'cat-earrings-img-x1y2z3', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc', desc: 'Elegant gold earrings for every occasion' },
  { id: 'necklaces', name: 'Necklaces', imgId: 'cat-necklaces-img-a4b5c6', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc', desc: 'Delicate gold chain necklaces and pendants' },
  { id: 'huggies', name: 'Huggies', imgId: 'cat-huggies-img-d7e8f9', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc', desc: 'Modern gold huggie hoop earrings' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-ivory"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white font-light">
                  {cat.name}
                </h3>
              </div>
              <p id={cat.descId} className="sr-only">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
