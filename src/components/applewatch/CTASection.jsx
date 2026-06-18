import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CTASection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="buy" ref={containerRef} className="bg-black py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="cta-bg-aw-6d9c3f"
        data-strk-bg="[cta-subtitle-aw] [cta-title-aw] Apple Watch lifestyle"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
          Get Yours Today
        </p>
        <h2
          id="cta-title-aw"
          className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Your next chapter starts on your wrist.
        </h2>
        <p
          id="cta-subtitle-aw"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Apple Watch Series 10 starts at $399. Free engraving. Free shipping. Easy returns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-10 py-4 font-semibold text-lg transition-colors">
            Shop Apple Watch
          </button>
          <button className="border border-white/30 hover:border-white/60 text-white rounded-full px-10 py-4 font-semibold text-lg transition-colors bg-white/5 hover:bg-white/10">
            Compare Models
          </button>
        </div>

        {/* Lifestyle image */}
        <div className="mt-16 max-w-2xl mx-auto">
          <img
            alt="Apple Watch lifestyle"
            data-strk-img-id="cta-lifestyle-img-aw-2b5e8c"
            data-strk-img="[cta-subtitle-aw] [cta-title-aw] Apple Watch active lifestyle"
            data-strk-img-ratio="16x9"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full rounded-2xl shadow-2xl opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
