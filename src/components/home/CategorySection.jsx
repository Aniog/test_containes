import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

function CategoryTile({ category }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative overflow-hidden aspect-portrait block"
    >
      <img
        data-strk-img-id={category.imgId}
        data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/20 transition-opacity duration-300 group-hover:opacity-0" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={category.titleId}
            className="font-cormorant text-2xl md:text-3xl uppercase tracking-widest text-velmora-ivory"
          >
            {category.label}
          </h3>
          <p
            id={category.descId}
            className="font-manrope text-xs text-velmora-ivory/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {category.description}
          </p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-0.5">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
            Browse by Category
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">
            Shop by Style
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(category => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
