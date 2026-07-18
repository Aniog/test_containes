import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="reveal font-serif text-3xl md:text-5xl text-brand-charcoal tracking-wide">
            Our Story
          </h1>
          <div className="reveal reveal-delay-1 w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="reveal reveal-delay-2 aspect-[16/9] overflow-hidden mb-12">
          <img
            data-strk-img-id="about-hero-p1q2r3"
            data-strk-img="[about-mission] [about-heading]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 id="about-heading" className="reveal font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide text-center mb-6">
            Crafted with Intention
          </h2>
          <p id="about-mission" className="reveal reveal-delay-1 font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6 text-center">
            Velmora was born from a simple belief: luxury should be lived in, not locked away. We create demi-fine jewelry that moves with you — from morning coffee to candlelit dinner.
          </p>
          <p className="reveal reveal-delay-2 font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
            Every piece is crafted with 18K gold plating over sterling silver, designed to be hypoallergenic and durable enough for everyday wear. Our artisans blend timeless techniques with modern sensibility, creating jewelry that feels both heirloom and entirely now.
          </p>
          <p className="reveal reveal-delay-3 font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
            We believe the finest things in life are the ones you wear every day. That's why we obsess over every detail — from the weight of a huggie to the clasp of a necklace — so each piece feels as good as it looks.
          </p>
          <div className="reveal reveal-delay-4 w-12 h-px bg-brand-gold mx-auto my-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="reveal reveal-delay-2">
              <h3 className="font-serif text-3xl text-brand-gold mb-2">18K</h3>
              <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted">Gold Plated</p>
            </div>
            <div className="reveal reveal-delay-3">
              <h3 className="font-serif text-3xl text-brand-gold mb-2">925</h3>
              <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted">Sterling Silver Base</p>
            </div>
            <div className="reveal reveal-delay-4">
              <h3 className="font-serif text-3xl text-brand-gold mb-2">0%</h3>
              <p className="font-sans text-xs tracking-extra-wide uppercase text-brand-muted">Nickel Free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
