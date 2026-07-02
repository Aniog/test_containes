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
    <section id="about" ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-4d5e6f"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
            <div className="max-w-md">
              <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-4">Our Story</p>
              <h2 id="brand-story-heading" className="font-serif text-3xl lg:text-4xl text-ink font-light leading-snug mb-6">
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <p id="brand-story-text" className="font-sans text-sm text-muted leading-relaxed mb-4">
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Every piece is crafted in 18K gold plate over sterling silver or brass, finished by hand, and designed to last. Because you deserve jewelry that keeps up with your life.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
