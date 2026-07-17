import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop and stud earrings',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-c3d4',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Gold necklace pendant chain',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-e5f6',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Huggie hoop earrings gold',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">Browse</p>
        <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">Shop by Category</h2>
        <div className="w-12 h-px bg-champagne mx-auto mt-4" />
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.href}
            className="group relative overflow-hidden block"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Hidden text for image context */}
            <span id={cat.titleId} className="sr-only">{cat.label}</span>
            <span id={cat.descId} className="sr-only">{cat.desc}</span>

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={cat.imgId}
              data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
              <p className="font-serif text-3xl text-ivory font-light tracking-widest">
                {cat.label}
              </p>
              <div className="w-8 h-px bg-champagne mt-3 group-hover:w-16 transition-all duration-400" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
