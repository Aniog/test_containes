import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding py-20 md:py-28 bg-brand-light-gray"
    >
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
      >
        {/* Image */}
        <div
          className={`aspect-[3/4] bg-brand-cream overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <img
            data-strk-img-id="brand-story-image"
            data-strk-img="[brand-story-title] [brand-story-text] gold jewelry artisan workshop warm lighting"
            data-strk-img-ratio="3x4"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora artisan crafting gold jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-serif text-heading-1 text-brand-charcoal mb-6"
          >
            Jewelry That<br />Feels Like You
          </h2>
          <div className="h-px w-16 bg-brand-gold mb-6" />
          <p
            id="brand-story-text"
            className="font-sans text-base text-brand-warm-gray leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: everyone deserves jewelry that feels special without the fine-jewelry price tag. We craft demi-fine pieces in 18K gold plate over recycled sterling silver — designed to be worn, loved, and treasured every day.
          </p>
          <p className="font-sans text-base text-brand-warm-gray leading-relaxed mb-8">
            Every piece is hypoallergenic, responsibly sourced, and made to last. Because luxury should feel effortless.
          </p>
          <Link
            to="/shop"
            className="btn-outline"
          >
            Discover the Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
