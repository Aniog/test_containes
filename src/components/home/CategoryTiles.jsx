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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-widest3 text-gold mb-3">Browse</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">Shop by Category</h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-blush block"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span id={cat.titleId} className="hidden">{cat.label} gold jewelry</span>
              <span id={cat.descId} className="hidden">fine gold {cat.label.toLowerCase()} jewelry editorial</span>

              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/45 transition-colors duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-ivory uppercase tracking-widest2 text-center">
                    {cat.label}
                  </h3>
                  <div className="flex justify-center mt-2">
                    <span className="font-sans text-xs uppercase tracking-widest2 text-ivory/80 border-b border-ivory/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
