import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 px-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc024"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050a0f]/80 via-[#0d1b2a]/85 to-[#050a0f]/90" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00d4ff]/10 blur-3xl z-10" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7c3aed]/10 blur-3xl z-10" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p id="cta-subtitle" className="text-sm font-medium tracking-widest uppercase text-[#00d4ff] mb-4">
          Join the Exploration
        </p>
        <h2 id="cta-title" className="text-4xl md:text-5xl font-extrabold text-[#f0f8ff] mb-6 leading-tight">
          The Universe Beneath Your Feet
        </h2>
        <p className="text-[#8bafc7] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Subscribe to MicroCosmos and receive weekly dispatches from the invisible world — stunning imagery, breakthrough science, and stories from the frontier of microscopy.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 rounded-full bg-[#0f2236] border border-[#00d4ff]/30 text-[#f0f8ff] placeholder-[#8bafc7] focus:outline-none focus:border-[#00d4ff] transition-colors text-sm"
          />
          <button
            type="submit"
            className="px-7 py-3 rounded-full bg-[#00d4ff] text-[#050a0f] font-bold text-sm hover:bg-[#00ffcc] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,204,0.5)] whitespace-nowrap"
          >
            Subscribe Free
          </button>
        </form>
        <p className="text-[#8bafc7] text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
