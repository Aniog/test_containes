import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Settings } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-dark"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bg-dark/90 via-bg-dark/80 to-bg-dark/70 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
          <Settings className="w-4 h-4 text-brand-light" />
          <span className="text-xs md:text-sm font-medium text-white/90 uppercase tracking-widest">
            Industrial Sheet Metal Solutions
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Precision Engineering
          <br />
          <span className="text-brand-light">for Metal Excellence</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Leading manufacturer of double folding machines, sheet metal folders,
          and metal folding equipment engineered for accuracy and durability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('#products')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-brand hover:bg-brand-dark transition-colors shadow-lg"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
