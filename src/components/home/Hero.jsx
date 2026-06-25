import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent z-20" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Precision Engineering
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-off-white leading-tight tracking-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Master the Art of
            <span className="block text-gold">Metal Folding</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-cool leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            ARTITECT MACHINERY delivers industrial-grade sheet metal folding machines — engineered for precision, built for performance, designed to last.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy-deep font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 text-base"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Explore Products
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/60 text-off-white font-semibold rounded-lg hover:border-gold hover:bg-gold/10 transition-all duration-200 text-base"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Request a Quote
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-gold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-slate-cool mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-slate-cool hover:text-gold transition-colors"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
