import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
        <div
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="jewelry artisan workshop gold warm light editorial craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-velmora-surface"
        />
        <div className="absolute inset-0 bg-velmora-bg/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-velmora-text font-light">
            About Velmora
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-6 text-base text-velmora-text-muted leading-relaxed">
          <p className="text-lg text-velmora-text font-serif leading-relaxed">
            Velmora Fine Jewelry was founded on a simple belief: luxury should be lived in, not locked away.
          </p>
          <p>
            We noticed a gap in the market. Fine jewelry was beautiful but out of reach. Fashion jewelry was accessible but lacked substance. We wanted something in between — pieces that felt special, looked stunning, and didn't require a second mortgage.
          </p>
          <p>
            Every Velmora piece is crafted from 18K gold-plated sterling silver or brass, using techniques borrowed from fine jewelry atelier traditions. We work with skilled artisans who understand that the difference between good and great is in the details — the weight of a clasp, the polish of a setting, the way light catches a crystal.
          </p>
          <p>
            Our collections are designed to be mixed, stacked, layered, and lived in. A pair of Golden Sphere Huggies for coffee runs. Amber Lace Earrings for dinner. The Royal Heirloom Set for the moments that matter.
          </p>
          <p>
            We believe jewelry tells a story — yours. And every Velmora piece is crafted to be part of that story for years to come.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-velmora-border">
          {[
            { title: 'Craftsmanship', desc: 'Every piece is made with care by skilled artisans using time-honored techniques.' },
            { title: 'Accessibility', desc: 'Premium quality without the luxury markup. Beautiful jewelry at fair prices.' },
            { title: 'Sustainability', desc: 'We use recycled metals where possible and all packaging is fully recyclable.' },
          ].map((val) => (
            <div key={val.title} className="text-center">
              <h3 className="font-serif text-xl text-velmora-text mb-3">{val.title}</h3>
              <p className="text-sm text-velmora-text-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
