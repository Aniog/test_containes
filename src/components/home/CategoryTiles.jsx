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
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4]"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6">
                <h3
                  id={cat.titleId}
                  className="font-cormorant text-2xl lg:text-3xl uppercase tracking-[0.15em] text-ivory font-medium mb-2"
                >
                  {cat.label}
                </h3>
                <p
                  id={cat.descId}
                  className="font-manrope text-xs text-ivory/70 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.description}
                </p>
                <div className="mt-4 w-8 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
