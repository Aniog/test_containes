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
    desc: 'Gold drop earrings filigree crystal editorial jewelry',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Gold necklace delicate chain crystal pendant editorial jewelry',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings close up editorial jewelry',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Browse by Style</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link key={cat.id} to={cat.href} className="group relative overflow-hidden aspect-[4/5] bg-cream-200 block">
              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-widest uppercase">
                  {cat.label}
                </h3>
                <span className="font-sans text-xs tracking-widest uppercase text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  Shop Now
                  <span className="inline-block w-4 h-px bg-white/70" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
