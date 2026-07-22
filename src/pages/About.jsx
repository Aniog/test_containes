import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-7d2e1f"
          data-strk-bg="[about-hero-title] gold jewelry craftsmanship brand story"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-velvet-950/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 id="about-hero-title" className="section-heading text-4xl md:text-6xl text-white text-center">
            Our Story
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          <div className="space-y-8 text-center">
            <div>
              <h2 className="section-heading text-2xl md:text-3xl text-velvet-950 mb-4">
                Jewelry That Lives on Your Skin
              </h2>
              <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                Velmora was founded in 2024 with a clear mission: to create demi-fine jewelry
                that bridges the gap between fast fashion and luxury fine jewelry. Every piece
                is crafted from 18K gold-plated brass using techniques traditionally reserved
                for fine jewelry houses.
              </p>
            </div>

            <hr className="hairline-divider max-w-[200px] mx-auto" />

            <div>
              <h2 className="section-heading text-2xl md:text-3xl text-velvet-950 mb-4">
                Our Materials
              </h2>
              <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                We use only 18K gold plating over brass — because every woman deserves
                jewelry that holds its warmth and luster. All our pieces are hypoallergenic,
                nickel-free, and designed to be worn daily without compromising on quality.
              </p>
            </div>

            <hr className="hairline-divider max-w-[200px] mx-auto" />

            <div>
              <h2 className="section-heading text-2xl md:text-3xl text-velvet-950 mb-4">
                Sustainability
              </h2>
              <p className="text-sm text-velvet-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                We believe in creating fewer, better things. Our production runs are small and
                intentional. Packaging is 100% recyclable. We partner with artisans who share
                our values of craftsmanship and ethical production.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
