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
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4] block"
            >
              {/* Image */}
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-velmora-obsidian/10 to-transparent transition-opacity duration-300 group-hover:from-velmora-obsidian/80" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={cat.titleId}
                  className="font-cormorant text-2xl md:text-3xl font-light text-velmora-white uppercase tracking-widest mb-2"
                >
                  {cat.label}
                </p>
                <p id={cat.descId} className="sr-only">{cat.label} gold jewelry collection</p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold-light">
                    Shop Now
                  </span>
                  <div className="w-6 h-px bg-velmora-gold-light" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
