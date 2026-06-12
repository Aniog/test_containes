import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-navy/75" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Industrial Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            Precision Metal
            <span className="block text-gold">Folding Machines</span>
          </h1>

          {/* Subheading */}
          <p
            id="hero-subtitle"
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            ARTITECT MACHINERY delivers world-class double folding machines, sheet metal folders, and industrial metal forming equipment — engineered for accuracy, built to last.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll('#products')}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 text-base"
            >
              Explore Products
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => handleScroll('#contact')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:border-gold hover:text-gold transition-all duration-200 text-base"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
