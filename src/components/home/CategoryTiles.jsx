import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">Explore</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="sr-only">{cat.label}</span>
              <span id={cat.descId} className="sr-only">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide mb-2">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-champagne mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
