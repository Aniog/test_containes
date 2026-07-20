import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
];

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="text-xs uppercase tracking-brand text-accent">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => {
            const titleId = `category-${category.id}-title`;
            return (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-cream"
              >
                <img
                  data-strk-img-id={`category-${category.id}-tile`}
                  data-strk-img={`[${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  src={placeholder}
                  alt={category.label}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-colors duration-300 group-hover:bg-foreground/35" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3
                    id={titleId}
                    className="font-serif text-2xl text-white md:text-3xl"
                  >
                    {category.label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
