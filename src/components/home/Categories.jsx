import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryData = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-img-x1y2z3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings and studs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-img-a4b5c6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Layering chains and pendants',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-img-d7e8f9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings',
  },
];

const Categories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-section-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryData.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-ivory"
            >
              <img
                alt={cat.name}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] [categories-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3 id={cat.titleId} className="font-serif text-2xl md:text-3xl text-white">
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="text-sm text-white/80 font-sans mt-1 hidden">
                    {cat.desc}
                  </p>
                  <span className="inline-block mt-3 text-xs text-white uppercase tracking-wider font-sans border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
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
};

export default Categories;
