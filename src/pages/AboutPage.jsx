import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import Footer from '../components/home/Footer';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg-g7h8i9"
          data-strk-bg="[about-hero-title] [about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 id="about-title" className="serif-heading text-4xl md:text-5xl lg:text-6xl text-white font-light">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-12 h-px bg-accent mx-auto mb-10" />

          <div className="prose prose-lg mx-auto text-secondary leading-relaxed space-y-6">
            <p className="serif-heading text-2xl md:text-3xl text-primary text-center italic leading-relaxed">
              "We believe that beautiful jewelry should be accessible to everyone — not just a privileged few."
            </p>

            <p>
              Velmora was founded in 2023 with a simple mission: to create demi-fine jewelry that looks and feels luxurious, without the luxury markup. We saw a gap in the market — women who wanted quality pieces for everyday wear but didn't want to spend hundreds of dollars on a single item.
            </p>

            <p>
              Every Velmora piece starts as a sketch in our studio. We work with skilled artisans who share our commitment to quality and craftsmanship. Our 18K gold plating process is meticulous — each piece is dipped multiple times to ensure a rich, lasting finish that stands up to daily wear.
            </p>

            <h2 className="serif-heading text-2xl text-primary mt-10 mb-4">Our Materials</h2>
            <p>
              We use sterling silver as our base metal, then apply multiple layers of 18K gold plating. This gives our pieces the weight, warmth, and luster of solid gold at a fraction of the cost. All our jewelry is hypoallergenic and nickel-free, so you can wear it with confidence.
            </p>

            <h2 className="serif-heading text-2xl text-primary mt-10 mb-4">Sustainability</h2>
            <p>
              We're committed to responsible sourcing and minimal waste. Our packaging is made from recycled materials, and we're constantly working to reduce our environmental footprint. Because looking good shouldn't cost the earth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
