import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group block"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-colors duration-300 ${hovered ? 'bg-velmora-black/50' : 'bg-velmora-black/25'}`} />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <span
          id={cat.titleId}
          className="font-serif text-xl md:text-2xl tracking-widest2 uppercase text-velmora-ivory font-light"
        >
          {cat.label}
        </span>
        <span id={cat.descId} className="sr-only">{cat.label} gold jewelry collection</span>
        <div className={`mt-3 font-sans text-[10px] tracking-widest uppercase text-velmora-gold transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          Shop Now →
        </div>
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-widest3 uppercase text-velmora-gold mb-3">Browse by Style</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-black">Shop by Category</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
