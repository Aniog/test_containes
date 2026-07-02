import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function QuoteSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-mc002"
        data-strk-bg="[quote-context] [quote-text]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a0f]/80" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />

      <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p id="quote-context" className="text-xs font-semibold uppercase tracking-[0.4em] text-violet-400 mb-8">
          Microscopic Biology
        </p>
        <blockquote
          id="quote-text"
          className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight italic mb-8"
        >
          "The universe is not only stranger than we suppose, but stranger than we can suppose."
        </blockquote>
        <p className="text-[#7fb3c8] text-lg font-medium">
          — J.B.S. Haldane, Biologist
        </p>
      </div>
    </section>
  );
}
