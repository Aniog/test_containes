import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CATEGORIES } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat) => {
            const labelId = `category-tile-${cat.slug}-label`;
            const blurbId = `category-tile-${cat.slug}-blurb`;
            return (
              <Link
                key={cat.slug}
                to={`/shop?category=${cat.slug}`}
                className="group relative aspect-[4/5] overflow-hidden bg-cream"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={cat.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/85" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-ivory">
                  <p
                    id={blurbId}
                    className="text-[11px] uppercase tracking-[0.3em] text-ivory/70 mb-3 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {cat.blurb}
                  </p>
                  <h3
                    id={labelId}
                    className="font-serif text-3xl md:text-4xl tracking-wide"
                  >
                    {cat.label}
                  </h3>
                  <span className="mt-3 inline-block text-[11px] uppercase tracking-[0.3em] border-b border-ivory/60 pb-1">
                    Shop {cat.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
