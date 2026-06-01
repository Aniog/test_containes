import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Footer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer ref={containerRef} className="relative bg-cosmos-bg border-t border-cosmos-border overflow-hidden">
      {/* Background image strip */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="footer-bg-mc060"
          data-strk-bg="[footer-tagline] [footer-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-bg/30 to-cosmos-bg" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2 id="footer-title" className="text-3xl md:text-4xl font-black text-white mb-3">
            The Universe is Closer Than You Think
          </h2>
          <p id="footer-tagline" className="text-slate-300 text-lg max-w-lg">
            Every drop of water, every grain of soil, every breath of air — a cosmos unto itself.
          </p>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-2xl font-black text-white">
              Micro<span className="text-cosmos-cyan">Cosmos</span>
            </p>
            <p className="text-slate-500 text-sm mt-1">Exploring the invisible world</p>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm">
            <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Bacteria</span>
            <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Cells</span>
            <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Fungi</span>
            <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Crystals</span>
            <span className="hover:text-cosmos-cyan cursor-pointer transition-colors">Insects</span>
          </div>
          <p className="text-slate-600 text-sm">© 2026 MicroCosmos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
