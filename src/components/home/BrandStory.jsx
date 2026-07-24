import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 border-t border-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-espresso border border-divider overflow-hidden order-2 lg:order-1">
            <img
              data-strk-img-id="brand-story-artisan"
              data-strk-img="[brand-story-text] jewelry artisan workshop gold crafting"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/40 to-transparent" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-gold font-sans font-light mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-champagne leading-[1.15] mb-6">
              Jewelry That Feels Like
              <br />
              <span className="italic text-gold-light">Coming Home</span>
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-6" />
            <p id="brand-story-text" className="text-sm sm:text-base text-champagne/60 font-sans font-light leading-relaxed mb-4">
              Velmora was born from a simple belief: everyone deserves jewelry that feels personal, not disposable. We create demi-fine pieces using 18K gold plating over surgical-grade steel — materials that last, at prices that don't exclude.
            </p>
            <p className="text-sm sm:text-base text-champagne/60 font-sans font-light leading-relaxed mb-8">
              Every piece is designed in our London studio, hand-finished by artisans who care about the details, and delivered to your door in our signature keepsake box.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light font-sans transition-colors duration-300 group"
            >
              Read Our Full Story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
