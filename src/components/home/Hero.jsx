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
      {/* Background image */}
      <div
        className="absolute inset-0 bg-steel-900"
        data-strk-bg-id="hero-bg-am7x2k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-steel-900/95 via-steel-900/80 to-steel-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-steel-900/60 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
              Precision Industrial Machinery
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="font-serif font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Engineering the Future of{' '}
            <span className="text-gold-400">Sheet Metal</span>{' '}
            Forming
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl drop-shadow"
          >
            ARTITECT MACHINERY delivers world-class double folding machines,
            sheet metal folders, and metal folding solutions — built for
            precision, durability, and industrial excellence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToProducts}
              className="bg-gold-500 hover:bg-gold-400 text-steel-900 font-bold px-8 py-4 rounded-lg text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Products
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-gold-500/60 hover:border-gold-400 text-gold-400 hover:text-gold-300 font-semibold px-8 py-4 rounded-lg text-base transition-all duration-200 hover:bg-gold-500/10"
            >
              Request a Quote
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-8">
            {[
              { value: '25+', label: 'Years Experience' },
              { value: '500+', label: 'Machines Delivered' },
              { value: '40+', label: 'Countries Served' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif font-bold text-3xl text-gold-400 drop-shadow">{stat.value}</span>
                <span className="text-white/70 text-sm mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-400 hover:text-gold-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
