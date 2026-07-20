import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=Earrings',
    imgId: 'cat-earrings-img-b2c3d4',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=Necklaces',
    imgId: 'cat-necklaces-img-e5f6g7',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=Huggies',
    imgId: 'cat-huggies-img-h8i9j1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="sr-only">Velmora fine gold {cat.label.toLowerCase()} collection editorial</span>

              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="w-8 h-px bg-gold mb-4 transition-all duration-300 group-hover:w-16" />
                <h3 className="font-cormorant text-2xl md:text-3xl font-light tracking-widest uppercase text-cream">
                  {cat.label}
                </h3>
                <p className="font-inter text-xs tracking-widest uppercase text-cream/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
