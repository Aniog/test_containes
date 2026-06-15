import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
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
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/80 to-[#0D1B2A]/40" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Industrial Precision
            </span>
          </div>

          {/* Heading */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Sheet Metal
            <br />
            <span className="text-[#C9A84C]">Folding</span>
            <br />
            Machines
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-[#8A9BB0] leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ARTITECT MACHINERY delivers precision-engineered double folding machines,
            metal folders, and sheet metal folding solutions trusted by fabricators worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-[#C9A84C] text-[#0D1B2A] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-colors duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explore Products
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-[#C9A84C] text-[#C9A84C] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition-colors duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get a Quote
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-extrabold text-[#C9A84C]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-[#8A9BB0] tracking-widest uppercase mt-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-[#C9A84C] animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
