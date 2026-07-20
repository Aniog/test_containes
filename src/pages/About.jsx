import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-g1h2i3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-5xl text-white tracking-wide">Our Story</h1>
          <p id="about-hero-subtitle" className="mt-3 text-sm text-white/80 font-sans tracking-wider">Where craftsmanship meets accessibility</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-brand-charcoal leading-relaxed">
              We believe luxury should be lived in, not locked away.
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-base text-brand-muted font-sans leading-relaxed">
            <p>
              Velmora was founded with a singular vision: to create demi-fine jewelry that combines the artistry of high jewelry with the accessibility of everyday wear. Every piece is designed in our studio and brought to life by skilled artisans who share our obsession with detail.
            </p>
            <p>
              Our 18K gold plating process ensures each piece has the warmth and luster of solid gold, while our hypoallergenic base metals mean you can wear Velmora from morning to night without a second thought.
            </p>
            <p>
              We skip the traditional retail markups and sell directly to you, which means we can invest more in materials and craftsmanship while keeping our prices fair. It also means we get to know our customers — and that connection drives everything we design.
            </p>
            <p>
              From the initial sketch to the final polish, every Velmora piece passes through hands that care about the details. Because we believe the jewelry you reach for every day should be the jewelry that lasts.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl text-brand-gold">18K</p>
              <p className="text-xs font-sans uppercase tracking-wider text-brand-muted mt-1">Gold Plated</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">30</p>
              <p className="text-xs font-sans uppercase tracking-wider text-brand-muted mt-1">Day Returns</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">100%</p>
              <p className="text-xs font-sans uppercase tracking-wider text-brand-muted mt-1">Hypoallergenic</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-brand-gold">Free</p>
              <p className="text-xs font-sans uppercase tracking-wider text-brand-muted mt-1">Worldwide Shipping</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
