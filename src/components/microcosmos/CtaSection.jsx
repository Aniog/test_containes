import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-x1y2z3"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-cosmos-bg/85" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmos-teal/5 blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <p className="text-cosmos-teal font-grotesk text-xs font-semibold tracking-[0.3em] uppercase mb-6">
          The Journey Continues
        </p>
        <h2
          id="cta-title"
          className="font-grotesk font-bold text-4xl md:text-6xl text-cosmos-text mb-6 leading-tight"
        >
          The Invisible World
          <br />
          <span className="bg-gradient-to-r from-cosmos-teal via-cosmos-purple to-cosmos-amber bg-clip-text text-transparent">
            Awaits Discovery
          </span>
        </h2>
        <p
          id="cta-subtitle"
          className="font-inter text-cosmos-muted text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Every drop of water, every handful of soil, every breath of air contains multitudes. The microscopic universe is not separate from our world — it is the foundation of it.
        </p>

        {/* Quote */}
        <blockquote className="border-l-2 border-cosmos-teal pl-6 text-left max-w-xl mx-auto mb-12">
          <p className="font-inter text-cosmos-muted text-base italic leading-relaxed mb-3">
            "The world is not to be put in order. The world is order. It is for us to put ourselves in unison with this order."
          </p>
          <cite className="font-grotesk text-cosmos-dim text-sm not-italic">
            — Henry Miller
          </cite>
        </blockquote>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="px-8 py-4 rounded-full bg-cosmos-teal text-cosmos-bg font-grotesk font-semibold text-sm tracking-wide hover:bg-cosmos-teal/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,170,0.5)]"
          >
            Explore Again
          </a>
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full border border-cosmos-muted/30 text-cosmos-muted font-grotesk font-semibold text-sm tracking-wide hover:border-cosmos-teal hover:text-cosmos-teal transition-all duration-300"
          >
            Back to Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
