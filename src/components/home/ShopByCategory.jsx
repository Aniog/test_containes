import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function ShopByCategory() {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={revealRef} className={`py-20 md:py-28 reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div ref={containerRef} className="max-w-7xl mx-auto section-padding">
        <h2
          id="category-section-title"
          className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide text-center mb-12 md:mb-16"
        >
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4x5] md:aspect-[3x4] overflow-hidden"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] [category-section-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-all duration-500 ${
                hoveredId === cat.id ? 'bg-black/40' : 'bg-black/20'
              }`} />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className={`font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase text-white transition-all duration-500 ${
                    hoveredId === cat.id ? 'translate-y-0' : 'translate-y-1'
                  }`}
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className={`font-sans text-xs text-white/80 tracking-wide mt-2 transition-all duration-500 ${
                    hoveredId === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
