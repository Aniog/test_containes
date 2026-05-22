import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CtaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-mc001"
        data-strk-bg="[cta-subtitle] [cta-title] microscopy science laboratory"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050a0f]/80 backdrop-blur-sm" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 block">Join the Exploration</span>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to See the <span className="text-cyan-400">Invisible</span>?
        </h2>
        <p id="cta-subtitle" className="text-slate-300 text-xl leading-relaxed mb-10">
          Subscribe to our newsletter and receive weekly microscopy images, scientific discoveries, and stories from the world beneath the lens.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 bg-[#0d1a26] border border-slate-600 text-slate-200 rounded-full placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <button className="px-8 py-4 bg-cyan-400 text-[#050a0f] font-bold rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="text-slate-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CtaSection;
