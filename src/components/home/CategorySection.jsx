import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] bg-parchment block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry ${cat.label.toLowerCase()} editorial`}
                data-strk-img-ratio="2x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3
                    id={cat.titleId}
                    className="font-cormorant text-2xl md:text-3xl font-light text-cream uppercase tracking-[0.12em]"
                  >
                    {cat.label}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-manrope text-[10px] uppercase tracking-[0.14em] text-cream/80">
                      Shop Now
                    </span>
                    <div className="w-6 h-px bg-cream/80" />
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
