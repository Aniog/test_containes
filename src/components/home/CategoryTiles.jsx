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
    <section ref={containerRef} className="bg-parchment py-20 lg:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Browse by category</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-obsidian">Shop the Edit</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-obsidian/30 transition-opacity duration-400 group-hover:opacity-0" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-obsidian/50 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-serif text-3xl text-ivory uppercase tracking-widest transition-transform duration-400 group-hover:-translate-y-2"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className="text-xs text-ivory/70 tracking-wide mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  {cat.description}
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
