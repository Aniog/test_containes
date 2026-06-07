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
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-teal-500/20">
          {/* Background */}
          <div
            className="absolute inset-0"
            data-strk-bg-id="callout-bg-mc002"
            data-strk-bg="[callout-subtitle] [callout-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-radial-teal" />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
            <h2
              id="callout-title"
              className="font-grotesk font-bold text-3xl md:text-5xl text-slate-100 mb-4"
            >
              Ready to Explore the{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Invisible World?
              </span>
            </h2>
            <p
              id="callout-subtitle"
              className="text-slate-300 text-lg max-w-xl mx-auto mb-8"
            >
              Browse our gallery of microscopic organisms, read the latest science, and discover
              the hidden universe that makes all life possible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-teal-500/20"
              >
                Explore Organisms
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/science"
                className="flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-teal-500/50 hover:text-teal-400 px-8 py-3.5 rounded-full transition-all"
              >
                Read Science Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallout;
