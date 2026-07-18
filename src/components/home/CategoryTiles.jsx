import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
            Browse by
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal">
            Category
          </h2>
          <div className="w-16 h-0.5 bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-title-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 id={`category-title-${cat.id}`} className="text-white text-3xl md:text-4xl font-serif font-semibold tracking-wider">
                  {cat.name}
                </h3>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                <span className="text-xs font-sans tracking-widest uppercase">Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}