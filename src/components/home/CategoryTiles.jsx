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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Shop by Category
          </h2>
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
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-strk-img-id={category.imgId}
          data-strk-img={`[${category.descId}] [${category.titleId}] gold jewelry`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={category.label}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

        {/* Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h3
            id={category.titleId}
            className="font-serif text-3xl md:text-4xl font-light text-cream mb-2"
          >
            {category.label}
          </h3>
          <p
            id={category.descId}
            className="font-sans text-xs text-cream/70 tracking-wide mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {category.description}
          </p>
          <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-gold border-b border-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
}
