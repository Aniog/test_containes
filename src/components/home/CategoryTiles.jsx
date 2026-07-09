import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={ref} className="section-padding py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-2 text-brand-charcoal">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className={`group relative aspect-[4/5] overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-desc-${cat.id}] [category-name-${cat.id}] gold jewelry elegant`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-charcoal/30 group-hover:bg-brand-charcoal/50 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3
                  id={`category-name-${cat.id}`}
                  className="font-serif text-heading-2 text-white mb-2"
                >
                  {cat.name}
                </h3>
                <p
                  id={`category-desc-${cat.id}`}
                  className="font-sans text-[11px] uppercase tracking-ultra-wide text-white/70"
                >
                  {cat.description}
                </p>
                <span className="mt-4 font-sans text-[10px] uppercase tracking-ultra-wide text-brand-gold border-b border-brand-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
