import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

const STATS = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '80+', label: 'Countries Served' },
  { value: '5,000+', label: 'Machines Installed' },
  { value: '99.2%', label: 'Uptime Reliability' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const scrollToProducts = () => {
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col bg-brand-navy overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-accent via-brand-accent-light to-transparent z-20" />

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-px bg-brand-accent" />
              <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">
                Industrial Precision
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-title"
              className="font-serif font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            >
              Sheet Metal Folding,{' '}
              <span className="text-brand-accent">Redefined.</span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="font-sans text-brand-mid text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              ARTITECT MACHINERY engineers world-class double folding machines and sheet metal folders — built for precision, durability, and industrial-scale performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-navy font-sans font-semibold px-8 py-4 rounded-full hover:bg-brand-accent-light transition-all duration-200 cursor-pointer border-none text-base"
              >
                Explore Products
                <ArrowRight size={18} />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-sans font-semibold px-8 py-4 rounded-full hover:border-brand-accent hover:text-brand-accent transition-all duration-200 cursor-pointer bg-transparent text-base"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 border-t border-white/10 bg-brand-navy/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <div className="font-serif font-bold text-brand-accent text-3xl md:text-4xl mb-1">
                  {stat.value}
                </div>
                <div className="font-sans text-brand-mid text-xs uppercase tracking-wider">
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-brand-mid hover:text-brand-accent transition-colors animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
