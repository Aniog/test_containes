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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-2">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
            Find Your Perfect Piece
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const titleId = `cat-title-${cat.id}`;
            const imgId = `cat-img-${cat.id}`;
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-velmora-charcoal"
              >
                <img
                  data-strk-img-id={imgId}
                  data-strk-img={`[${titleId}] gold jewelry ${cat.name} elegant collection`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3
                      id={titleId}
                      className="font-serif text-2xl md:text-3xl text-white tracking-wide"
                    >
                      {cat.name}
                    </h3>
                    <span className="mt-3 inline-block font-sans text-xs uppercase tracking-[0.15em] text-white/80 border-b border-white/40 pb-0.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
