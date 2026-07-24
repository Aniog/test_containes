import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'gold drop earrings filigree editorial',
    href: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'gold pendant necklace woman neck editorial',
    href: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'gold huggie hoop earrings close up ear',
    href: '/shop?category=huggies',
  },
];

const CategoryTile = ({ cat }) => (
  <Link to={cat.href} className="group relative overflow-hidden block aspect-[3/4]">
    <img
      data-strk-img-id={cat.imgId}
      data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
      data-strk-img-ratio="3x4"
      data-strk-img-width="600"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={cat.label}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* Hidden text for image query */}
    <span id={cat.titleId} className="sr-only">{cat.label}</span>
    <span id={cat.descId} className="sr-only">{cat.desc}</span>

    {/* Overlay */}
    <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

    {/* Label */}
    <div className="absolute inset-0 flex items-end p-6">
      <div>
        <p className="font-serif text-2xl md:text-3xl text-cream font-300 mb-1">
          {cat.label}
        </p>
        <div className="w-0 group-hover:w-8 h-px bg-gold transition-all duration-300" />
      </div>
    </div>
  </Link>
);

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-300">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
