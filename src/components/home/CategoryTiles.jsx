import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-3">Explore</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] md:aspect-[2/3] overflow-hidden block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hidden text for image query */}
              <span id={cat.titleId} className="hidden">{cat.label} jewelry</span>
              <span id={cat.descId} className="hidden">{cat.desc}</span>

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl lg:text-3xl text-ivory font-light tracking-wide">
                    {cat.label}
                  </h3>
                  <div className="w-8 h-px bg-champagne mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="font-sans text-xs uppercase tracking-widest text-champagne-light mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
