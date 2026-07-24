import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoriesSection() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-accent">
            Browse
          </p>
          <h2 className="font-serif text-3xl text-base md:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-base"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-base/20 transition-colors group-hover:bg-base/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${cat.id}`}
                  className="font-serif text-2xl tracking-widest text-white transition-transform duration-300 group-hover:scale-105 md:text-3xl"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
