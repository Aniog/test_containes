import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'cat-earrings', name: 'Earrings', query: 'gold earrings collection display elegant', link: '/shop?category=earrings' },
  { id: 'cat-necklaces', name: 'Necklaces', query: 'gold necklaces collection display elegant', link: '/shop?category=necklaces' },
  { id: 'cat-huggies', name: 'Huggies', query: 'gold huggie earrings collection display', link: '/shop?category=huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--velmora-text-muted)] mb-2">Explore</p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="hairline w-16 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative aspect-[4/5] overflow-hidden bg-[var(--velmora-bg-secondary)]"
            >
              <div
                className="absolute inset-0"
                data-strk-bg-id={cat.id}
                data-strk-bg={`[${cat.id}-label] ${cat.query}`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 id={`${cat.id}-label`} className="font-serif-display text-2xl sm:text-3xl tracking-[0.15em] uppercase mb-4 group-hover:mb-6 transition-all duration-300">
                    {cat.name}
                  </h3>
                  <span className="text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white/60 pb-1">
                    Discover
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
