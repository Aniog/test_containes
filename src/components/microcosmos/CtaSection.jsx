import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CtaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc019"
        data-strk-bg="[cta-title] [cta-subtitle] microscopic bioluminescence abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a14]/80" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p id="cta-subtitle" className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
          Begin Your Journey
        </p>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          The Microscopic World Awaits
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Every surface, every drop of water, every breath of air is teeming with life and structure at scales we are only beginning to understand. The universe is not just out there — it is right here, all around us, invisible and magnificent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#050a14] font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] text-lg"
          >
            View Gallery
          </a>
          <a
            href="#worlds"
            className="px-10 py-4 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-all duration-300 text-lg"
          >
            Explore Worlds
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
