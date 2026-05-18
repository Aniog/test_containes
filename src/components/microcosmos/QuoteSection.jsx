import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function QuoteSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 grayscale opacity-30"
        data-strk-bg-id="quote-bg-mc001"
        data-strk-bg="[quote-text-mc001] microscopic life water drop"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-neutral-500 text-sm uppercase tracking-widest mb-8">— Ernst Haeckel, 1904</p>
        <blockquote id="quote-text-mc001" className="text-3xl md:text-5xl font-light italic text-white leading-tight">
          "The universe is not only queerer than we suppose, but queerer than we can suppose."
        </blockquote>
        <p className="text-neutral-400 text-base mt-8 max-w-xl mx-auto leading-relaxed">
          In every cubic centimeter of pond water, thousands of organisms are born, feed, reproduce, and die —
          an entire drama invisible to the naked eye.
        </p>
      </div>
    </section>
  );
}
