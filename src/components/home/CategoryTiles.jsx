import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="velmora-section" ref={containerRef}>
      <div className="velmora-container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--velmora-accent)' }}>
            Explore
          </p>
          <h2 className="velmora-heading text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: 'var(--velmora-text)' }}>
            Shop by Category
          </h2>
          <div className="velmora-divider-thin w-24 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
              style={{ backgroundColor: 'var(--velmora-dark)' }}
            >
              <img
                alt={cat.name}
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={cat.imageQuery}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="velmora-product-name text-xl md:text-2xl text-white mb-4 tracking-[0.2em]">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <span className="text-xs tracking-[0.15em] uppercase">Shop Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
