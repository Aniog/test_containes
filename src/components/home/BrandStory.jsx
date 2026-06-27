import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (strkImgConfig && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-warm-200 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-gold-600/30 to-dark-900/80"
              data-strk-bg-id="brand-story-bg-x9y8z7"
              data-strk-bg="[brand-story-subtitle] [brand-story-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-gold-300/30 text-5xl italic">Est. 2024</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl sm:text-4xl text-dark-900 leading-snug mb-6"
            >
              Jewelry that speaks softly,{' '}
              <span className="italic text-gold-600">but is never overlooked</span>
            </h2>
            <p
              id="brand-story-subtitle"
              className="text-muted leading-relaxed font-sans mb-4"
            >
              Velmora was born from a simple belief: fine jewelry should not require a fine-jewelry budget.
              We craft demi-fine pieces in 18K gold plating over hypoallergenic metals — designed to be worn
              every day, treasured for years, and accessible to every woman who values quiet elegance.
            </p>
            <p className="text-muted leading-relaxed font-sans mb-8">
              Each piece is designed in our studio, hand-finished by skilled artisans, and quality-checked
              before it reaches you. No middlemen. No markups. Just beautifully crafted jewelry, delivered
              to your door.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm text-gold-600 tracking-[0.15em] uppercase font-sans border-b border-gold-400 pb-1 hover:text-gold-500 hover:border-gold-300 transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
