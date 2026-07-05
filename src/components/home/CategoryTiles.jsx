import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-b2c3d4',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'gold drop earrings filigree crystal editorial',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-e5f6g7',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'gold pendant necklace woman wearing editorial',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-h8i9j1',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'gold huggie hoop earrings close up ear',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden aspect-[4/5] block"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Base overlay */}
              <div className="absolute inset-0 bg-obsidian/30 transition-opacity duration-300 group-hover:opacity-0" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-obsidian/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <span className="font-cormorant text-2xl md:text-3xl font-light text-parchment tracking-widest2 uppercase">
                  {cat.label}
                </span>
                <span className="font-manrope text-[10px] tracking-widest uppercase text-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
