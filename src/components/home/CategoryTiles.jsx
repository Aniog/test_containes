import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    slug: 'earrings',
    subtitle: 'Studs, drops & cuffs',
    imgId: 'category-earrings-tile',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    subtitle: 'Pendants & chains',
    imgId: 'category-necklaces-tile',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    slug: 'huggies',
    subtitle: 'Everyday essentials',
    imgId: 'category-huggies-tile',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velmora-ivory">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-12 h-hairline bg-velmora-gold" />
            <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
              Explore
            </span>
            <span className="w-12 h-hairline bg-velmora-gold" />
          </div>
          <h2 className="heading-section text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}-name] [${cat.id}-sub] fine jewelry gold`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Text refs */}
              <span id={`${cat.id}-name`} className="sr-only">{cat.name}</span>
              <span id={`${cat.id}-sub`} className="sr-only">{cat.subtitle}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-black/20 group-hover:bg-velmora-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="font-serif text-heading-lg md:text-heading-xl text-velmora-white tracking-[0.05em]">
                  {cat.name}
                </h3>
                <p className="font-sans text-caption uppercase tracking-[0.15em] text-velmora-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {cat.subtitle}
                </p>
                <span className="mt-4 inline-block w-8 h-hairline bg-velmora-gold opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:w-12" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
