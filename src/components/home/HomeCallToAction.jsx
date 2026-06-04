import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeCallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-cta-bg-m4n5o6"
        data-strk-bg="[cta-subtitle] [cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-[#050d1a]/85" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050d1a] via-transparent to-[#050d1a]" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5ff]/5 rounded-full blur-3xl z-10" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold text-[#00e5ff] uppercase tracking-widest">
          The Gallery Awaits
        </span>
        <h2 id="cta-title" className="text-3xl md:text-5xl font-black text-white mt-4 mb-4 leading-tight">
          See the Unseen World
          <br />
          <span className="text-[#00e5ff]">in Stunning Detail</span>
        </h2>
        <p id="cta-subtitle" className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          Browse our curated gallery of microscopy images — from electron micrographs to fluorescence photography of living cells.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/gallery"
            className="flex items-center gap-2 bg-[#00e5ff] text-[#050d1a] font-bold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all text-base"
          >
            Open Gallery <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="text-slate-400 hover:text-[#00e5ff] font-medium transition-colors text-base"
          >
            Learn about our mission →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
