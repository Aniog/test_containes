import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/lib/data';
import { IMAGE_PLACEHOLDER } from '@/lib/images';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl md:text-4xl text-espresso">
          Shop by Category
        </h2>

        <div ref={containerRef} className="grid gap-4 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-parchment"
            >
              <img
                data-strk-img-id={cat.imageId}
                data-strk-img={`[category-title-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={IMAGE_PLACEHOLDER}
                alt={cat.label}
                className="h-full w-full object-cover transition-transform duration-700 ease-in-out-circ group-hover:scale-105"
              />
              <p id={`category-title-${cat.id}`} className="sr-only">
                {cat.query}
              </p>
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl">{cat.label}</h3>
                <span className="mt-3 flex translate-y-2 items-center gap-1 text-xs font-medium uppercase tracking-widest opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}