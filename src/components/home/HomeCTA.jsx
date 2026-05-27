import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeCTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-slate-700">
          {/* Background */}
          <div
            className="absolute inset-0 z-0"
            data-strk-bg-id="home-cta-bg-g7h8i9"
            data-strk-bg="[cta-heading] microscope laboratory science"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />

          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl z-10" />

          {/* Content */}
          <div className="relative z-20 p-10 md:p-16">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4 block">
              Begin Your Journey
            </span>
            <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 max-w-xl leading-tight">
              The Microscopic World Awaits Your Discovery
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">
              From the ocean floor to the clouds above, microorganisms are everywhere. Explore their diversity, their science, and their stunning beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/30"
              >
                View Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/science"
                className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-teal-500/50 hover:text-teal-400 font-semibold px-8 py-4 rounded-full transition-all duration-200"
              >
                Read the Science
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
