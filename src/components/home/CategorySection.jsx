import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-2">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-parchment"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hidden text for query */}
              <span id={cat.titleId} className="hidden">{cat.label} jewelry</span>
              <span id={cat.descId} className="hidden">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                <h3 className="font-serif text-2xl md:text-3xl text-ivory tracking-wider">
                  {cat.label}
                </h3>
                <p className="font-sans text-xs text-ivory/70 mt-1 tracking-wide">
                  {cat.desc}
                </p>
                <div className="mt-4 w-8 h-px bg-champagne transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
