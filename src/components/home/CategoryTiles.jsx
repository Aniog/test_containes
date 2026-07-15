import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
          Curated For You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
          Shop by Category
        </h2>
        <div className="w-12 h-px bg-warm-400 mx-auto mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <div
              data-strk-bg-id={`cat-${cat.id}`}
              data-strk-bg={`[cat-name-${cat.id}] gold jewelry`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/45 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`cat-name-${cat.id}`}
                className="font-serif text-2xl md:text-3xl font-semibold tracking-widest2 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
