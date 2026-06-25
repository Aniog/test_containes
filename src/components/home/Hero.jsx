import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-medium">
              Industrial Precision Since 1998
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Master the Art of{' '}
            <span className="text-[#C9A84C]">Metal Folding</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed font-light"
          >
            ARTITECT MACHINERY delivers world-class sheet metal folding machines —
            double folding machines, metal folders, and precision forming equipment
            engineered for demanding industrial applications.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 rounded-full bg-[#C9A84C] text-[#0D1B2A] font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Products
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-sm tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-200"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-[#C9A84C]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-white/50 tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 hover:text-[#C9A84C] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
