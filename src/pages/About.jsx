import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-6xl text-white">
            About Velmora
          </h1>
          <p id="about-hero-subtitle" className="font-sans text-sm md:text-base text-white/80 mt-4 max-w-lg">
            Crafting demi-fine jewelry that becomes part of your story
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          <h2 className="font-serif text-3xl text-charcoal mb-6">Our Mission</h2>
          <p className="font-sans text-charcoal-light leading-relaxed mb-6">
            Velmora was created with a simple yet powerful vision: to democratize fine jewelry.
            We believe that beautiful, well-crafted jewelry should not be reserved for the few.
            Every woman deserves to adorn herself with pieces that make her feel confident,
            elegant, and truly herself.
          </p>
          <p className="font-sans text-charcoal-light leading-relaxed mb-12">
            Our demi-fine collection bridges the gap between costume jewelry and high-end
            couture. Using 18K gold-plated surgical steel and carefully selected crystals,
            we create pieces that look and feel luxurious — without the luxury price tag.
          </p>

          <h2 className="font-serif text-3xl text-charcoal mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Quality First</h3>
              <p className="font-sans text-sm text-charcoal-light">
                Every piece undergoes rigorous quality control. We use only the finest
                materials and work with skilled artisans.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Sustainable</h3>
              <p className="font-sans text-sm text-charcoal-light">
                We are committed to ethical sourcing and sustainable practices throughout
                our supply chain.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-charcoal mb-2">Inclusive</h3>
              <p className="font-sans text-sm text-charcoal-light">
                Jewelry is for everyone. Our designs celebrate diversity and are made
                to complement every style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
