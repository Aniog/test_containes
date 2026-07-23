import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CATEGORIES } from '@/data/products';

const TILE_IDS = {
  earrings: 'cat-tile-earrings',
  necklaces: 'cat-tile-necklaces',
  huggies: 'cat-tile-huggies',
};

export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (containerRef.current) {
        ImageHelper.disconnect(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Shop by Category
          </p>
          <h2 className="font-playfair text-3xl font-medium text-espresso md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-espresso"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={TILE_IDS[cat.id]}
                data-strk-bg={`[cat-tile-${cat.id}-label]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-espresso/20 transition-colors duration-300 group-hover:bg-espresso/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`cat-tile-${cat.id}-label`}
                  className="font-cormorant text-2xl font-semibold uppercase tracking-[0.2em] text-white md:text-3xl"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
