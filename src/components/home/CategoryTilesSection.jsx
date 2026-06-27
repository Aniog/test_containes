import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-widest uppercase text-gold mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Browse
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden block"
              style={{ aspectRatio: '3/4' }}
            >
              {/* Image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent transition-opacity duration-300 group-hover:from-charcoal/80" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={cat.descId}
                  className="text-cream/70 text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {cat.description}
                </p>
                <h3
                  id={cat.titleId}
                  className="text-2xl md:text-3xl font-light text-cream tracking-widest uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {cat.label}
                </h3>
                <div className="flex items-center gap-2 mt-3">
                  <span
                    className="text-xs tracking-widest uppercase text-gold-light font-medium"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    Shop Now
                  </span>
                  <div className="w-6 h-px bg-gold-light transition-all duration-300 group-hover:w-10" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
