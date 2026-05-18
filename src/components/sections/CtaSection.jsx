import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CtaSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-black py-24 md:py-40 border-t border-white/10 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Microscopic world background"
          className="w-full h-full object-cover opacity-30"
          data-strk-img-id="cta-bg-img-x7y8z9"
          data-strk-img="[cta-title] microscopic colorful abstract biology"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <p className="text-neutral-400 text-xs font-medium tracking-widest uppercase mb-4">Join the Community</p>
        <h2 id="cta-title" className="text-white font-black text-4xl md:text-7xl tracking-tighter leading-none mb-6">
          See the World<br />Differently
        </h2>
        <p className="text-neutral-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Subscribe to our newsletter and receive weekly microscopic wonders, research updates, and exclusive high-resolution imagery.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-neutral-500 px-5 py-3 rounded-full text-sm focus:outline-none focus:border-white/60 transition-colors"
          />
          <button
            type="submit"
            className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-neutral-200 transition-all text-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-neutral-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
