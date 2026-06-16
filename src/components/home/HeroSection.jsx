import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Factory } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-9f2a1b"
        data-strk-bg="[hero-title] [hero-subtitle] sheet metal folding machine industrial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-am-bg/70 via-am-bg/50 to-am-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-am-bg/80 via-transparent to-am-bg/60" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-am-gold/60 to-transparent z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 py-32 md:py-40 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-am-gold/60" />
          <Factory className="w-5 h-5 text-am-gold" />
          <div className="h-px w-12 bg-am-gold/60" />
        </div>

        <p className="text-xs font-medium uppercase tracking-[0.12em] text-am-gold mb-5">
          Precision Engineering Since 1998
        </p>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-am-text leading-[1.05] tracking-[-0.02em] mb-6"
        >
          ARTITECT
          <br />
          <span className="text-am-gold">MACHINERY</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-am-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Industry-leading double folding machines, sheet metal folders, and metal
          folding solutions engineered for precision, built for performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            onClick={(e) => handleScroll(e, '#products')}
            className="inline-flex items-center gap-2 bg-am-gold text-am-bg font-semibold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-am-gold-hover hover:scale-[1.02] transition-all duration-200"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center gap-2 border border-am-gold text-am-gold font-semibold uppercase tracking-[0.06em] px-8 py-4 rounded hover:bg-am-gold/10 transition-all duration-200"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-am-bg to-transparent z-10" />
    </section>
  );
}
