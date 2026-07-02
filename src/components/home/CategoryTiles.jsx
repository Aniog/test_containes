import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-img-earrings-a1b2c3',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
    desc: 'Gold drop earrings, studs, ear cuffs',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-img-necklaces-d4e5f6',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
    desc: 'Delicate gold pendant necklaces',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-img-huggies-g7h8i9',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
    desc: 'Chunky gold huggie hoop earrings',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            Shop by Category
          </h2>
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
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="w-8 h-px bg-gold mb-4 transition-all duration-300 group-hover:w-12" />
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light text-ivory uppercase tracking-widest"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-manrope text-xs text-ivory/70 mt-2 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
