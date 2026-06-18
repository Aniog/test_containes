import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'cat-earrings', label: 'Earrings', imgId: 'cat-earrings-img-a1b2c3', titleId: 'cat-earrings-title', descId: 'cat-earrings-desc', href: '/shop?category=Earrings' },
  { id: 'cat-necklaces', label: 'Necklaces', imgId: 'cat-necklaces-img-d4e5f6', titleId: 'cat-necklaces-title', descId: 'cat-necklaces-desc', href: '/shop?category=Necklaces' },
  { id: 'cat-huggies', label: 'Huggies', imgId: 'cat-huggies-img-g7h8i9', titleId: 'cat-huggies-title', descId: 'cat-huggies-desc', href: '/shop?category=Huggies' },
];

function CategoryTile({ cat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={cat.href}
      className="relative overflow-hidden group block aspect-[3/4]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hidden text for image query */}
      <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
      <span id={cat.descId} className="sr-only">Velmora {cat.label.toLowerCase()} collection fine jewelry</span>

      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? 'bg-espresso/50' : 'bg-espresso/20'}`} />

      {/* Label */}
      <div className="absolute inset-0 flex items-end justify-center pb-8">
        <div className="text-center">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-cream uppercase tracking-widest">
            {cat.label}
          </h3>
          <div className={`mt-2 mx-auto h-px bg-gold transition-all duration-300 ${hovered ? 'w-12' : 'w-0'}`} />
          <p className={`font-manrope text-xs uppercase tracking-widest text-cream/80 mt-2 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            Shop Now
          </p>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
