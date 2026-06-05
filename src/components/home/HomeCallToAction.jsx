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
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl overflow-hidden border border-teal-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-16">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-500/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              Begin Your Journey
            </div>
            <h2 id="cta-title" className="text-3xl md:text-5xl font-bold text-slate-100 mb-5 leading-tight">
              The Universe Beneath the Lens
            </h2>
            <p id="cta-desc" className="text-slate-300 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Hundreds of stunning microscopy images, in-depth science articles, and fascinating organism profiles await you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                Explore Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/science"
                className="flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-teal-500/50 hover:text-teal-400 px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
