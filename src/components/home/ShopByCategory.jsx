import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function ShopByCategory() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div
        ref={revealRef}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/3] overflow-hidden group"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={cat.titleId}
                  className={`font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-white transition-all duration-300 ${hoveredId === cat.id ? 'tracking-ultra-wide' : ''}`}
                >
                  {cat.name}
                </span>
              </div>
              <span id={cat.descId} className="sr-only">
                {cat.name} jewelry collection
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
