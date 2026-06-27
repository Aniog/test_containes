import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 md:pt-24">
      {/* Hero banner */}
      <div className="bg-cream-dark py-14 md:py-20 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
          Our Story
        </p>
        <h1 className="section-title">About Velmora</h1>
        <div className="hairline mx-auto mt-5" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          <div className="aspect-[4/5] bg-cream-dark overflow-hidden">
            <img
              data-strk-img-id="about-hero"
              data-strk-img="[about-intro] artisan hands crafting gold jewelry studio"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Artisan crafting jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-intro" className="section-title mb-6">Where It All Began</h2>
            <div className="hairline mb-6" />
            <p className="body-text mb-5">
              Velmora was founded in 2023 with a clear vision: to bridge the gap between costume jewelry and
              fine jewelry. We believe every woman deserves to wear beautiful, high-quality pieces without the
              luxury markup.
            </p>
            <p className="body-text mb-5">
              Our name comes from the Latin "velum" (veil) and "aurum" (gold) — the idea of a golden veil,
              something delicate and precious that wraps you in warmth and light.
            </p>
            <p className="body-text">
              Every Velmora piece is designed in our London studio, handcrafted using 18K gold plating over
              recycled sterling silver, and rigorously tested to be hypoallergenic and long-lasting.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-20">
          {[
            {
              title: 'Consciously Crafted',
              desc: 'We use recycled metals and conflict-free crystals. Our packaging is 100% recyclable.',
            },
            {
              title: 'Built to Last',
              desc: '18K gold plating over sterling silver with a protective clear coat for lasting shine.',
            },
            {
              title: 'For Every Woman',
              desc: 'Demi-fine prices, luxury quality. Because feeling beautiful should be accessible.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full border border-gold/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <h3 className="font-serif text-xl mb-3">{value.title}</h3>
              <p className="body-text">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
