import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings collection luxury jewelry flatlay on dark background', to: '/shop?category=earrings' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace collection luxury jewelry editorial dark background', to: '/shop?category=necklaces' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings collection luxury jewelry close-up', to: '/shop?category=huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-espresso mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
            >
              <div
                data-strk-bg-id={`cat-${cat.id}`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent transition-transform duration-700 group-hover:scale-105"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-lg text-ivory/20 tracking-mega-wide uppercase">
                    {cat.name}
                  </span>
                </div>
              </div>

              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10 md:pb-14">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-wide mb-1">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] tracking-mega-wide uppercase text-ivory/60 font-sans">
                    Explore
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
