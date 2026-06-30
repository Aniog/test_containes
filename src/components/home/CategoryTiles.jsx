import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-img-earrings-3f4g',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
    desc: 'gold earrings collection editorial jewelry',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-img-necklaces-5h6i',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
    desc: 'gold necklace pendant collection editorial jewelry',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-img-huggies-7j8k',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
    desc: 'gold huggie hoop earrings collection editorial jewelry',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="pt-12 pb-20 md:pt-14 md:pb-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <h3 className="font-serif text-2xl md:text-3xl text-cream tracking-widest uppercase font-light">
                  {cat.label}
                </h3>
                <div className="mt-3 overflow-hidden h-px w-0 group-hover:w-12 bg-gold transition-all duration-400" />
                <span className="mt-3 font-sans text-xs tracking-widest uppercase text-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
