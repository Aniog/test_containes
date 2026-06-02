import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeCallout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-slate-800">
          <div
            className="absolute inset-0"
            data-strk-bg-id="callout-bg-mc002"
            data-strk-bg="[callout-desc] [callout-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">Deep Dive</span>
            <h2 id="callout-title" className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              The Science Behind the Invisible
            </h2>
            <p id="callout-desc" className="text-slate-300 text-lg mb-8 leading-relaxed">
              Discover how microorganisms shape our climate, drive evolution, and hold the keys to medicine's future.
            </p>
            <Link
              to="/science"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-teal-500/25"
            >
              Explore the Science
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallout;
