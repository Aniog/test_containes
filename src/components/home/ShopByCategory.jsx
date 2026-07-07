import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import RevealSection from '@/components/RevealSection';

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </RevealSection>

        <RevealSection delay={1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.id}`}
                className="group relative aspect-[4/3] overflow-hidden img-placeholder"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-espresso/20 group-hover:bg-brand-espresso/40 transition-colors duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id={cat.titleId}
                    className="font-serif text-2xl md:text-3xl text-white tracking-ultra-wide uppercase"
                  >
                    {cat.name}
                  </span>
                </div>
                <span id={cat.descId} className="hidden">{cat.name} jewelry collection</span>
              </Link>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
