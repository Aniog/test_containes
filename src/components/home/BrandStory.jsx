import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
            <img
              data-strk-img-id="brand-story-img-6f2a"
              data-strk-img="[brand-story-title] [brand-story-subtitle] gold jewelry artisan workshop warm lighting"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 to-transparent lg:hidden" />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.08em] text-text-primary leading-tight mb-6"
            >
              Jewelry That Feels Like You
            </h2>
            <p id="brand-story-subtitle" className="hidden">Velmora brand story artisan jewelry</p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              Velmora was born from a simple belief: every woman deserves access to beautiful, well-crafted jewelry without the luxury markup. We design pieces that are meant to be worn every day — to boardrooms, brunches, and everything in between.
            </p>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over quality base metals, designed to be hypoallergenic and long-lasting. We work directly with skilled artisans and cut out the middleman to bring you premium demi-fine jewelry at honest prices.
            </p>
            <Link
              to="#"
              className="inline-block border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold hover:text-bg-deep transition-all duration-300"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
