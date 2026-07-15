import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-ink-100 overflow-hidden">
            <div
              data-strk-bg-id="brand-story-image"
              data-strk-bg="[brand-story-heading] [brand-story-sub]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="absolute inset-0 bg-ink-800"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="font-sans text-xs tracking-widest uppercase text-ink-400 mb-3">
              About Velmora
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl md:text-4xl text-ink-900 font-light leading-tight"
            >
              Jewelry That<br />
              <span className="italic">Holds Meaning</span>
            </h2>
            <p
              id="brand-story-sub"
              className="mt-6 text-ink-600 text-sm md:text-base leading-relaxed font-sans"
            >
              At Velmora, we believe jewelry should be more than an accessory — it should tell a story.
              Each piece is handcrafted with 18K gold plating, designed to be worn every day and
              cherished for years. We source ethically, price transparently, and design with intention.
            </p>
            <p className="mt-4 text-ink-600 text-sm md:text-base leading-relaxed font-sans">
              From our atelier to you — no middlemen, no markups. Just beautiful, demi-fine jewelry
              made to last.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-gold-600 hover:text-gold-700 text-sm tracking-wider uppercase font-sans transition-colors group"
            >
              Our Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}