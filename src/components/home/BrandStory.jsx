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
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-c4d5e6"
                data-strk-img="[brand-story-text] [brand-story-heading]"
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 hidden md:block" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-xs uppercase tracking-widest font-medium text-gold mb-4 font-sans">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p
              id="brand-story-text"
              className="text-base font-sans text-taupe leading-relaxed mb-6"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We create demi-fine pieces that feel genuinely luxurious, crafted with care and designed to become part of your everyday story.
            </p>
            <p className="text-base font-sans text-taupe leading-relaxed mb-10">
              Every piece is 18K gold plated, hypoallergenic, and made to last. We believe in slow fashion — fewer, better things that you'll reach for again and again.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-ink hover:text-gold transition-colors font-sans group"
            >
              Read Our Full Story
              <span className="w-8 h-px bg-ink group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
