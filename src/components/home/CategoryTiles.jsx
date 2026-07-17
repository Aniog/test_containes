import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    href: '/shop?category=Earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    query: 'gold drop earrings filigree editorial dark background',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    href: '/shop?category=Necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    query: 'gold pendant necklace woman neck editorial',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    href: '/shop?category=Huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    query: 'gold huggie hoop earrings close up ear',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
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
                data-strk-img={`[${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for query */}
              <span id={cat.titleId} className="sr-only">{cat.query}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <span className="text-xs uppercase tracking-[0.2em] font-medium text-velmora-cream/70 mb-2 group-hover:text-velmora-gold transition-colors duration-300">
                  Shop
                </span>
                <h3 className="font-serif text-3xl font-light text-velmora-cream tracking-wide">
                  {cat.label}
                </h3>
                <div className="mt-4 w-8 h-px bg-velmora-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
