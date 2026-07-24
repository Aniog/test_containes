import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3">Shop by Category</h2>
          <p className="font-sans text-sm text-brand-text-secondary max-w-md mx-auto">
            Find your perfect piece across our curated collections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-brand-text rounded-sm overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-name-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <span id={`cat-name-${cat.id}`} className="hidden">{cat.name}</span>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{cat.name}</h3>
                <span className="font-sans text-xs uppercase tracking-widest text-white/70 flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}