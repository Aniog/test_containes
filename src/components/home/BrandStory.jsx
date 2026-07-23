import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[360px] md:min-h-0">
            <img
              data-strk-img-id="brand-story-img-x9y8z7"
              data-strk-img="[brand-story-text] [brand-story-title] fine jewelry artisan craftsmanship gold"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="text-xs tracking-[0.3em] uppercase font-medium text-velmora-gold mb-4 font-sans">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-velmora-ink tracking-wide leading-snug mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet elegance</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-sm text-velmora-mist font-sans leading-relaxed mb-4"
            >
              Velmora was founded with a single belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that feel luxurious, wear effortlessly, and last for years.
            </p>
            <p className="text-sm text-velmora-mist font-sans leading-relaxed mb-8">
              Every piece is crafted from 18K gold plated brass, hypoallergenic and designed to be worn every day — from morning coffee to candlelit dinners.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-medium text-velmora-gold font-sans group"
            >
              Read Our Story
              <span className="w-8 h-px bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
