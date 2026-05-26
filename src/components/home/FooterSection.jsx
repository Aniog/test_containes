import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const FooterSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer ref={containerRef} className="bg-[#050d1a] border-t border-[#00d4ff]/10">
      {/* CTA Banner */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="footer-bg-mc032"
          data-strk-bg="[footer-cta-title] microscopic world bioluminescence"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-[#050d1a]/85" />
        <div className="relative z-10 py-24 px-4 text-center max-w-3xl mx-auto">
          <h2 id="footer-cta-title" className="text-4xl md:text-5xl font-black text-[#f0f8ff] mb-5">
            Dive Deeper Into the <span className="text-[#00d4ff]">Invisible</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            The microscopic world is waiting to be discovered. Every drop of water, every grain of soil holds an entire universe of life.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-[#00d4ff] text-[#050d1a] font-bold px-10 py-4 rounded-full hover:bg-white transition-all duration-300 text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)]"
          >
            Back to Top
          </button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/40 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#00d4ff] animate-pulse" />
            </div>
            <span className="text-[#f0f8ff] font-bold text-xl">
              Micro<span className="text-[#00d4ff]">Cosmos</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm">
            {['Explore', 'Gallery', 'Organisms', 'Categories', 'Facts'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00d4ff] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-slate-600 text-sm">
            © 2026 MicroCosmos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
