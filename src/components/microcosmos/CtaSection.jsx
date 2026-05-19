import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CtaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-h5i6j7"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a14]/85" />

      <div className="relative z-20 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <p
          id="cta-subtitle"
          className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4"
        >
          Begin Your Journey
        </p>
        <h2
          id="cta-title"
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          The Invisible World Awaits
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          Every surface you touch, every breath you take, every drop of water — all teeming with microscopic life and structure. The universe is not just out there in the stars. It is here, all around you, in the world too small to see.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3 bg-cyan-400 text-[#050a14] font-bold rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
          >
            View the Gallery
          </a>
          <a
            href="#worlds"
            className="px-8 py-3 border border-slate-500 text-slate-300 font-semibold rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
          >
            Explore Micro Worlds
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
