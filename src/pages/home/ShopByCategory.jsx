import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-warm section-padding py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
          Browse
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-charcoal">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-velmora-sand"
          >
            <img
              data-strk-img-id={`category-${cat.id}`}
              data-strk-img={`[category-${cat.id}-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-velmora-charcoal/30 transition-colors duration-300 group-hover:bg-velmora-charcoal/40" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3
                id={`category-${cat.id}-title`}
                className="font-serif text-2xl md:text-3xl font-light text-white mb-2 transition-transform duration-300 group-hover:-translate-y-1"
              >
                {cat.name}
              </h3>
              <p className="font-sans text-xs text-white/80 tracking-wider mb-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {cat.description}
              </p>
              <span className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-wider uppercase text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Explore <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}