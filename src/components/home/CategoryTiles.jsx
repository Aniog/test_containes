import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative overflow-hidden group aspect-[3/4] md:aspect-[2/3] block"
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-400 ${
                hoveredId === cat.id
                  ? 'bg-velmora-ink/50'
                  : 'bg-velmora-ink/25'
              }`} />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <p
                  id={cat.titleId}
                  className="font-cormorant text-3xl md:text-4xl font-light text-velmora-cream tracking-[0.1em] uppercase"
                >
                  {cat.label}
                </p>
                <p
                  id={cat.descId}
                  className={`font-inter text-xs text-velmora-cream/80 tracking-[0.08em] mt-2 transition-all duration-300 ${
                    hoveredId === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  {cat.description}
                </p>
                <div className={`mt-4 font-inter text-[11px] tracking-[0.15em] uppercase border border-velmora-gold/60 text-velmora-gold px-5 py-2 transition-all duration-300 ${
                  hoveredId === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  Shop Now
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
