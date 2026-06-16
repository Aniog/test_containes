import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full" />
            <span className="text-accent-400 text-sm font-medium">Industry-Leading Technology</span>
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Precision Sheet Metal Folding Machines
          </h1>

          <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
            Engineered for excellence. Our double folding machines deliver unmatched accuracy, speed, and reliability for your metal fabrication needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
