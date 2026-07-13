import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category }) {
  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="group relative overflow-hidden block"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-linen">
        <img
          data-strk-img-id={category.imgId}
          data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={category.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/60 via-velmora-obsidian/10 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

        {/* Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center">
          <h3
            id={category.titleId}
            className="font-serif text-2xl md:text-3xl font-light text-velmora-cream tracking-[0.1em] mb-2"
          >
            {category.label}
          </h3>
          <p
            id={category.descId}
            className="font-sans text-xs text-velmora-cream/70 tracking-wide mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {category.description}
          </p>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
}
