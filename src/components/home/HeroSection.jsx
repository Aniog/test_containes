import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-strk-bg-id="hero-bg-a3f7c2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/80 via-violet-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Decorative blurred orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-violet-300/15 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
            <span className="text-purple-200 text-sm font-medium tracking-wide uppercase">
              Spring Collection
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            The Elegance of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-violet-200">
              Purple Tulips
            </span>
          </h1>

          {/* Subtitle */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-violet-100/90 font-light leading-relaxed mb-10 max-w-xl"
          >
            Discover the timeless beauty of purple tulips — symbols of royalty,
            admiration, and rebirth. Let their vivid blooms transform your world
            with grace and wonder.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 hover:-translate-y-0.5">
              Explore Collection
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-0.5">
              Learn More
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/15">
            {[
              { value: '200+', label: 'Tulip Varieties' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '15', label: 'Years of Bloom' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-violet-300 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
