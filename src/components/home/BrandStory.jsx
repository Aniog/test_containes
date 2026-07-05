import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-brand-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] bg-brand-ivory overflow-hidden">
          <div
            className="w-full h-full"
            data-strk-bg-id="brand-story-img-x9k2"
            data-strk-bg="[brand-story-title] [brand-story-text]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="800"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>

        {/* Text */}
        <div className="py-4">
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal leading-tight"
          >
            Jewelry That Tells Your Story
          </h2>
          <p
            id="brand-story-text"
            className="font-sans text-sm md:text-base text-brand-muted mt-6 leading-relaxed max-w-md"
          >
            At Velmora, we believe fine jewelry shouldn't require a fine-jewelry price tag. 
            Each piece is thoughtfully designed in our London studio and crafted with 18K gold 
            plating over hypoallergenic metals — so you can wear your favorites every day, 
            without compromise.
          </p>
          <a
            href="/about"
            className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-1 hover:border-brand-gold hover:text-brand-gold transition-colors no-underline"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
