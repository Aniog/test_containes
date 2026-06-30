import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoriesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <CategoryTile key={cat.id} category={cat} large={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category, large }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className={`relative overflow-hidden group block ${large ? 'md:row-span-1' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-cream">
        <img
          data-strk-img-id={category.imgId}
          data-strk-img={`[${category.descId}] [${category.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={category.label}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className={`absolute inset-0 transition-all duration-500 ${hovered ? 'bg-velmora-obsidian/50' : 'bg-velmora-obsidian/20'}`} />

        {/* Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
          <h3
            id={category.titleId}
            className="font-serif text-3xl md:text-4xl font-light text-velmora-ivory tracking-wide"
          >
            {category.label}
          </h3>
          <p
            id={category.descId}
            className={`font-sans text-xs text-velmora-ivory/70 mt-2 tracking-wide transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            {category.description}
          </p>
          <span className={`mt-4 font-sans text-[10px] tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            Shop Now
          </span>
        </div>
      </div>
    </Link>
  );
}
