import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryImages = {
  earrings: { ratio: '3x4', width: '800' },
  necklaces: { ratio: '3x4', width: '800' },
  huggies: { ratio: '3x4', width: '800' },
  sets: { ratio: '3x4', width: '800' },
};

export default function CategorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const displayCategories = categories.filter((c) => c.id !== 'sets');

  return (
    <section ref={containerRef} className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto container-px">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-overline mb-3">Explore</p>
          <h2 className="font-serif text-display-sm md:text-[3.5rem] text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {displayCategories.map((cat) => {
            const imgInfo = categoryImages[cat.id] || { ratio: '3x4', width: '800' };
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden"
              >
                <img
                  data-strk-img-id={`category-${cat.id}-tile`}
                  data-strk-img={`[category-label-${cat.id}] elegant gold jewelry collection`}
                  data-strk-img-ratio={imgInfo.ratio}
                  data-strk-img-width={imgInfo.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p id={`category-label-${cat.id}`} className="font-serif text-heading-lg md:text-display-sm text-white">
                    {cat.name}
                  </p>
                  <span className="inline-block mt-2 font-sans text-[11px] uppercase tracking-[0.12em] text-white/80 border-b border-white/40 pb-0.5 group-hover:border-gold-pale group-hover:text-gold-pale transition-colors duration-300">
                    Shop Now
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
