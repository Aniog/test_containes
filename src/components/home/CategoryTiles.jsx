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
    <section className="py-20 md:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden block"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{ backgroundColor: 'rgba(26,23,20,0.2)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(26,23,20,0.45)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(26,23,20,0.2)'; }}
                />

                {/* Label */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3
                      id={cat.titleId}
                      className="font-cormorant text-2xl md:text-3xl font-light uppercase tracking-widest-lg text-center"
                      style={{ color: '#F5F0E8' }}
                    >
                      {cat.label}
                    </h3>
                    <div className="flex justify-center mt-3">
                      <span
                        className="font-manrope text-[10px] uppercase tracking-widest-md border-b pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: '#C9A96E', borderColor: '#C9A96E' }}
                      >
                        Shop Now
                      </span>
                    </div>
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
