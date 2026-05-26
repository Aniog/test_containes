import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-4">
            Ride Without Limits
          </span>
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-100 leading-none mb-6"
          >
            Feel the<br />
            <span className="text-orange-500">Freedom</span><br />
            of the Road
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg"
          >
            Discover premium bikes built for every terrain — from city streets to mountain trails. Your perfect ride is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-orange-500/30 text-base"
            >
              Explore Bikes <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 border border-neutral-600 hover:border-orange-500 text-neutral-100 font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base"
            >
              View Categories
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-16">
            {[
              { value: '500+', label: 'Bike Models' },
              { value: '50K+', label: 'Happy Riders' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-neutral-100">{stat.value}</p>
                <p className="text-sm text-neutral-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-neutral-500 hover:text-orange-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
