import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const QuoteSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-mc050"
        data-strk-bg="[quote-text] [quote-section-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050810]/80" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p id="quote-section-title" className="text-xs uppercase tracking-widest text-violet-400 mb-8 font-medium">
          Words of Wonder
        </p>
        <blockquote
          id="quote-text"
          className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          "The universe is not only queerer than we suppose, but queerer than we
          can suppose."
        </blockquote>
        <cite className="text-slate-400 text-sm not-italic">
          — J.B.S. Haldane, <span className="text-slate-500">Possible Worlds, 1927</span>
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;
