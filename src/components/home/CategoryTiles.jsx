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
    <section className="py-20 md:py-28 bg-[#f0ebe4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-[#c9a96e] mb-3">
            Browse
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-[#2c2825]">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto mt-4" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-[#2c2825]"
            >
              {/* Background image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714]/70 via-[#1a1714]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-10">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl font-light text-[#fdfaf6] tracking-wide"
                >
                  {cat.label}
                </h3>
                <div className="mt-3 overflow-hidden">
                  <span className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#c9a96e] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Shop Now →
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
