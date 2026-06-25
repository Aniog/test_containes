import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const scrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1C33]/90 via-[#1B2A4A]/80 to-[#1B2A4A]/50" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C] z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] inline-block" />
            Precision Sheet Metal Solutions
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Engineering
            <span className="block text-[#C9A84C]">Perfection</span>
            in Metal Folding
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-[#B8C8DC] leading-relaxed mb-10 max-w-xl"
          >
            Industry-leading double folding machines and sheet metal folders engineered for precision, durability, and unmatched performance across every application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-[#C9A84C] text-[#1B2A4A] px-8 py-4 rounded-lg font-bold text-base hover:bg-[#b8943e] transition-colors duration-200 tracking-wide"
            >
              Explore Products
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-base hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors duration-200 tracking-wide"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-[#C9A84C]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#8A9BB0] mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-[#C9A84C] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
