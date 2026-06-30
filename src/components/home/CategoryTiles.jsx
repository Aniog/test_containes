import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    imgId: 'cat-tile-earrings-a1b2c3',
    titleId: 'cat-title-earrings',
    descId: 'cat-desc-earrings',
    desc: 'Gold earrings studs drops huggies',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    imgId: 'cat-tile-necklaces-d4e5f6',
    titleId: 'cat-title-necklaces',
    descId: 'cat-desc-necklaces',
    desc: 'Gold necklace pendant chain jewelry',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    imgId: 'cat-tile-huggies-g7h8i9',
    titleId: 'cat-title-huggies',
    descId: 'cat-desc-huggies',
    desc: 'Gold huggie hoop earrings close fitting',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">Browse by Category</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">Shop the Edit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden block"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-obsidian-light transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-bg-ratio="2x3"
                data-strk-bg-width="800"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-obsidian/20 to-transparent group-hover:from-obsidian/80 transition-colors duration-300" />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory mb-2">
                  {cat.label}
                </h3>
                <span className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 group-hover:text-gold-light group-hover:border-gold-light transition-colors duration-300">
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
