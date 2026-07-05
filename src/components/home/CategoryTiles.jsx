import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = [
  { imgId: 'cat-earrings-img-p9q0r1', query: 'gold earrings elegant jewelry' },
  { imgId: 'cat-necklaces-img-s2t3u4', query: 'gold necklace pendant jewelry' },
  { imgId: 'cat-huggies-img-v5w6x7', query: 'gold huggie hoop earrings jewelry' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
            >
              <img
                data-strk-img-id={categoryImages[i].imgId}
                data-strk-img={`[${cat.titleId}] ${categoryImages[i].query}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={cat.titleId} className="text-product text-sm md:text-base text-white font-medium">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
