import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    sub: 'Drops, studs & cuffs',
    href: '/shop?category=earrings',
    imgId: 'cat-earrings-img-a1b2c3',
    titleId: 'cat-earrings-title',
    subId: 'cat-earrings-sub',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    sub: 'Pendants & chains',
    href: '/shop?category=necklaces',
    imgId: 'cat-necklaces-img-d4e5f6',
    titleId: 'cat-necklaces-title',
    subId: 'cat-necklaces-sub',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    sub: 'Huggie hoops',
    href: '/shop?category=huggies',
    imgId: 'cat-huggies-img-g7h8i9',
    titleId: 'cat-huggies-title',
    subId: 'cat-huggies-sub',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group relative overflow-hidden block aspect-[4/5] md:aspect-[3/4]"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.subId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-velmora-obsidian/20 to-transparent transition-opacity duration-300 group-hover:from-velmora-obsidian/80" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-300">
                <p
                  id={cat.subId}
                  className="text-[10px] uppercase tracking-widest font-sans text-velmora-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0"
                >
                  {cat.sub}
                </p>
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-white uppercase tracking-widest"
                >
                  {cat.label}
                </h3>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs uppercase tracking-widest font-sans text-white/80">
                    Shop Now
                  </span>
                  <div className="w-6 h-px bg-velmora-gold" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
