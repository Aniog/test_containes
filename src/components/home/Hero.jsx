import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, Sparkles } from 'lucide-react';

const stats = [
  { value: '47', label: 'Realities Mapped' },
  { value: '12K+', label: 'Travelers Transported' },
  { value: '99.8%', label: 'Safe Return Rate' },
  { value: '∞', label: 'Possibilities' },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-nx7k2p"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-space-black" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse-slow z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl animate-pulse-slow z-10" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-inter text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Quantum-Certified Luxury Travel
          </span>
        </div>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-mist leading-tight mb-6"
          style={{ textShadow: '0 0 60px rgba(124,58,237,0.4)' }}
        >
          Beyond This
          <br />
          <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
            Reality
          </span>
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Step through the portal. Discover steampunk empires, neon megacities,
          ancient civilizations, and ocean worlds beyond imagination.
          Luxury travel redefined — across dimensions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#destinations"
            className="font-cinzel text-sm font-semibold px-10 py-4 rounded-full bg-gradient-to-r from-purple-700 to-violet-600 text-white hover:from-purple-600 hover:to-violet-500 transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] tracking-widest w-full sm:w-auto"
          >
            Explore Destinations
          </a>
          <a
            href="#book"
            className="font-cinzel text-sm font-semibold px-10 py-4 rounded-full border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 tracking-widest w-full sm:w-auto"
          >
            Book Your Portal
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cinzel text-3xl md:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </div>
              <div className="font-inter text-xs text-gray-400 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-inter text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>
    </section>
  );
}
