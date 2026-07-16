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
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Browse by Style</p>
          <h2 className="section-heading">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] bg-parchment block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.titleId}] gold jewelry ${cat.label.toLowerCase()} editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay — always dark enough to guarantee cream text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-obsidian/10 group-hover:from-obsidian/90 group-hover:via-obsidian/50 transition-all duration-300" />

              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 id={cat.titleId} className="font-cormorant text-2xl md:text-3xl font-light tracking-wide mb-2" style={{color: '#FAF7F2'}}>
                    {cat.label}
                  </h3>
                  <span className="font-manrope text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{color: '#C9A96E'}}>
                    Shop Now →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
