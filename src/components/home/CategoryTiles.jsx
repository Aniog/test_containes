import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    titleText: 'Gold earrings collection',
    descText: 'Elegant gold drop earrings and studs on dark background',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    titleText: 'Gold necklaces collection',
    descText: 'Delicate gold chain necklaces with pendants on neutral background',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    titleText: 'Gold huggie earrings collection',
    descText: 'Chunky gold huggie hoop earrings close up on dark background',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ink font-light">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} to={cat.href} className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block">
              {/* Hidden text for image queries */}
              <span id={cat.titleId} className="sr-only">{cat.titleText}</span>
              <span id={cat.descId} className="sr-only">{cat.descText}</span>

              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <p className="font-cormorant text-2xl md:text-3xl text-cream uppercase tracking-[0.15em] font-light">
                  {cat.label}
                </p>
                <span className="font-manrope text-[10px] tracking-widest uppercase text-cream/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
