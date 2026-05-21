import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-gray-800">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc025"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gray-950/85" />
      <div className="relative z-20 max-w-3xl mx-auto text-center px-4 md:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-4 block">Join the Journey</span>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          The Invisible World Awaits
        </h2>
        <p id="cta-subtitle" className="text-gray-300 text-xl mb-10 leading-relaxed">
          Every drop of water, every grain of soil, every breath you take is teeming with microscopic life. The MicroCosmos is everywhere — you just need to look closer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#explore" className="bg-teal-400 text-gray-950 font-bold px-8 py-4 rounded-full hover:bg-teal-300 transition text-base">
            Start Exploring
          </a>
          <a href="#gallery" className="border border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-full hover:border-teal-400/40 hover:text-teal-400 transition text-base">
            Browse Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
