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
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-parchment block"
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <p
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl font-light text-cream uppercase tracking-widest"
                  >
                    {cat.label}
                  </p>
                  <p className="font-sans text-xs text-cream/70 mt-1 tracking-wider">
                    {cat.description}
                  </p>
                  <div className="mt-4 inline-block border-b border-cream/60 pb-0.5">
                    <span className="font-sans text-xs uppercase tracking-widest text-cream/80">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>

              {/* Always-visible label on mobile */}
              <div className="absolute top-4 left-4 md:hidden">
                <span className="font-serif text-lg text-cream uppercase tracking-widest">
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
