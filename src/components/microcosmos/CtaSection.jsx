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
        data-strk-bg-id="cta-bg-mc026"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d1a]/80" />

      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <p id="cta-subtitle" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
          Join the Discovery
        </p>
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-[#e8f4f8] mb-6 leading-tight">
          The Invisible World Awaits
        </h2>
        <p className="text-xl text-[#94b8c8] mb-10 leading-relaxed">
          Subscribe to receive the latest discoveries, stunning imagery, and scientific breakthroughs from the microscopic frontier.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 bg-[#0a1628] border border-[#1a3a4a] rounded-full text-[#e8f4f8] placeholder-[#5a7a8a] focus:outline-none focus:border-[#00d4aa] transition-colors"
          />
          <button className="px-8 py-4 bg-[#00d4aa] text-[#050d1a] font-bold rounded-full hover:bg-[#7df9e8] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,170,0.4)] whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-[#5a7a8a] mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
};

export default CtaSection;
