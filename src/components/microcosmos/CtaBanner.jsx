import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc999"
        data-strk-bg="[cta-title] microscopic world science nature"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050a0f]/90 via-[#050a0f]/70 to-[#050a0f]/90" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 id="cta-title" className="text-3xl md:text-5xl font-black text-[#e8f4f8] mb-4 leading-tight">
          The Universe Beneath Your Feet
        </h2>
        <p className="text-[#7fb3c8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Every surface, every breath, every drop of water teems with life and structure invisible to the naked eye. The microcosmos is everywhere — and it's extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full bg-[#00d4c8] text-[#050a0f] font-bold text-base hover:bg-[#00bfb4] transition-all duration-200 shadow-[0_0_30px_rgba(0,212,200,0.4)]"
          >
            Explore the Gallery
          </a>
          <a
            href="#science"
            className="px-8 py-4 rounded-full border border-[#e8f4f8]/20 text-[#e8f4f8] font-semibold text-base hover:border-[#00d4c8]/50 hover:text-[#00d4c8] transition-all duration-200"
          >
            Read the Science
          </a>
        </div>
      </div>
    </section>
  );
}
