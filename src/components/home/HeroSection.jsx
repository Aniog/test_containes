import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleScroll = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-brand-navy"
        data-strk-bg-id="hero-bg-am7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/90" />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/40 rounded-full px-5 py-2 mb-8">
          <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Precision Sheet Metal Folding
          </span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-title"
          className="text-white font-bold leading-tight mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Engineering the Future of{' '}
          <span className="text-brand-gold">Metal Folding</span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-brand-silver text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          ARTITECT MACHINERY delivers world-class double folding machines, sheet metal folders, and metal folding solutions — built for precision, durability, and industrial excellence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => handleScroll('#products')}
            className="flex items-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-bold text-sm tracking-wide uppercase hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore Machines
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-bold text-sm tracking-wide uppercase hover:border-brand-gold hover:text-brand-gold transition-all duration-200 cursor-pointer"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Request a Quote
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: '500+', label: 'Machines Delivered' },
            { value: '30+', label: 'Countries Served' },
            { value: '20+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-brand-gold font-bold text-3xl md:text-4xl mb-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-brand-silver text-xs tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => handleScroll('#products')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-silver hover:text-brand-gold transition-colors cursor-pointer"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
