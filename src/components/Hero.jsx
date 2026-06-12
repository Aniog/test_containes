import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1C2E]/95 via-[#0F1C2E]/80 to-[#0F1C2E]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span
              id="hero-label"
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
            >
              Precision Engineering
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Master the Art of
            <span className="block text-[#C9A84C]">Metal Folding</span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Industrial-grade sheet metal folding machines engineered for precision,
            durability, and efficiency. From double folding machines to full metal
            folder systems — built for professionals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => {
                const el = document.querySelector('#products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0F1C2E] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wide"
            >
              Explore Products
            </button>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/40 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wide"
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
                <div className="text-3xl font-bold text-[#C9A84C]">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-[#C9A84C] transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
