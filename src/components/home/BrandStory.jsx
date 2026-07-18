import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            className="aspect-[3/4] bg-sand-light overflow-hidden"
            data-strk-bg-id="brand-story-img"
            data-strk-bg="[brand-story-p] gold jewelry studio craftsmanship"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="700"
          />

          {/* Text */}
          <div className="max-w-md">
            <p className="font-sans text-xs tracking-widest uppercase text-stone mb-4">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide mb-6 leading-tight">
              Jewelry That Becomes<br />Part of Your Story
            </h2>
            <p id="brand-story-p" className="text-espresso-light leading-relaxed mb-6">
              Velmora was born from a simple belief: that fine jewelry should be an everyday pleasure, not a locked-away treasure. Each piece is designed in our Barcelona atelier and crafted with 18K gold plating, ethically sourced crystals, and obsessive attention to detail — so you can wear it, live in it, and pass it down.
            </p>
            <p className="text-espresso-light leading-relaxed mb-8">
              From the first sketch to the final polish, every Velmora piece is made to move with you — through coffee runs, dinner parties, boardrooms, and everything in between.
            </p>
            <Link to="/" className="btn-outline">Discover Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
