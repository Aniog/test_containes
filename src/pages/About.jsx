import { useRef } from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function About() {
  const craftRef = useRef(null);
  useImageLoader([], craftRef);

  return (
    <main className="bg-velmora-cream text-velmora-espresso">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          ref={craftRef}
          className="absolute inset-0 bg-velmora-stone/20"
          data-strk-bg-id="about-hero-bg-9x2a7c"
          data-strk-bg="[about-hero-title] [about-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl mx-auto">
          <p
            id="about-hero-subtitle"
            className="text-velmora-cream/90 uppercase tracking-[0.2em] text-sm mb-4"
          >
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-cream leading-[1.1] mb-6"
          >
            Quiet Luxury, Made for Everyday
          </h1>
        </div>
        <div className="absolute inset-0 bg-velmora-espresso/40" />
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6">
          Velmora was born from a simple belief
        </h2>
        <p className="text-lg md:text-xl text-velmora-espresso/80 leading-relaxed">
          Fine jewelry should feel personal, not precious. Every piece is designed in-house
          and finished in 18K gold plate, so you can layer, gift, and wear without the
          occasion. We balance elevated craft with an accessible price point — because
          luxury is a feeling, not a statement.
        </p>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 border-t border-velmora-espresso/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            <div>
              <h3 className="font-serif text-2xl mb-3">18K Gold Plated</h3>
              <p className="text-velmora-espresso/70">
                Warm, lasting color on a nickel-free, hypoallergenic base.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Demi-Fine Craft</h3>
              <p className="text-velmora-espresso/70">
                Designed to be worn daily — water-resistant, tarnish-resistant, and made to layer.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-3">Gifting, Simplified</h3>
              <p className="text-velmora-espresso/70">
                Every order arrives in signature Velmora packaging, ready to give.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature strip */}
      <section className="py-16 bg-velmora-espresso text-velmora-cream text-center">
        <p className="font-serif text-2xl md:text-3xl tracking-wide">
          Crafted to be treasured.
        </p>
      </section>
    </main>
  );
}
