import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const getImgUrl = (id) => {
  const entry = strkImgConfig[id];
  if (!entry?.results?.length) return null;
  return entry.results[0].url;
};

export default function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">Browse by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl text-velmora-text-dark font-light">
            Shop by Style
          </h2>
        </div>

        {/* Hidden text nodes */}
        <div className="hidden">
          {categories.map(cat => (
            <span key={cat.id}>
              <span id={cat.titleId}>{cat.titleText}</span>
              <span id={cat.descId}>{cat.descText}</span>
            </span>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative group overflow-hidden cursor-pointer"
              style={{ aspectRatio: index === 1 ? '3/4' : '3/4' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={`cat-${cat.id}-img-7x3k`}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src={getImgUrl(`cat-${cat.id}-img-7x3k`) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
                  <h3 className="font-serif text-3xl md:text-4xl text-velmora-cream font-light tracking-wider">
                    {cat.label}
                  </h3>
                  <div className="mt-3 overflow-hidden h-5">
                    <span className="block font-sans text-xs uppercase tracking-widest text-velmora-gold transform transition-transform duration-300 translate-y-5 group-hover:translate-y-0">
                      Shop Now →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

