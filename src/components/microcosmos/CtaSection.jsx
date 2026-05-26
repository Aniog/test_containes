import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaSection() {
  const containerRef = useRef(null);
  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 md:py-36 overflow-hidden bg-slate-950">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc040"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-slate-950/80" />

      {/* Decorative glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="relative z-20 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-6 inline-block border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 rounded-full">
          Join the Discovery
        </span>
        <h2 id="cta-title" className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          The Universe Beneath Your Feet Awaits
        </h2>
        <p id="cta-subtitle" className="text-slate-300 text-lg mb-10 leading-relaxed">
          Every puddle, every handful of soil, every breath of air contains multitudes. The microscopic world is the foundation of all life — and it's waiting to be explored.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#explore"
            className="bg-cyan-400 text-slate-950 font-bold px-8 py-3.5 rounded-full hover:bg-cyan-300 transition text-base"
          >
            Start Exploring
          </a>
          <a
            href="#gallery"
            className="border border-slate-500 text-slate-300 px-8 py-3.5 rounded-full hover:border-slate-300 hover:text-white transition text-base"
          >
            Browse Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
