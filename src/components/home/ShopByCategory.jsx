import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTile = ({ category }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[3x4] md:aspect-[4x5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          id={category.titleId}
          className={`font-serif text-xl tracking-ultra-wide uppercase text-white transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {category.name}
        </span>
      </div>
      <p id={category.descId} className="hidden">{category.name} jewelry collection</p>
      {/* Always-visible label at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent md:hidden">
        <span className="font-serif text-sm tracking-wide uppercase text-white">
          {category.name}
        </span>
      </div>
    </Link>
  );
};

const ShopByCategory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-charcoal">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {categories.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
