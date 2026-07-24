import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-dark tracking-wide">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-velmora-linen block"
            >
              {/* Image */}
              <img
                alt={cat.label}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/60 via-velmora-obsidian/10 to-transparent transition-opacity duration-300 group-hover:from-velmora-obsidian/70" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-300">
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light text-velmora-cream tracking-wide"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-inter text-xs text-velmora-cream/70 mt-1 transition-all duration-300 group-hover:text-velmora-cream/90"
                >
                  {cat.description}
                </p>
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-inter text-xs uppercase tracking-widest text-velmora-gold">
                    Shop Now
                  </span>
                  <span className="text-velmora-gold text-sm">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
