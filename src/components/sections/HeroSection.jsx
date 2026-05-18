import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="text-white font-black text-xl tracking-widest uppercase">MicroCosmos</span>
        <div className="hidden md:flex items-center gap-8 text-neutral-400 text-sm font-medium tracking-wider uppercase">
          <a href="#explore" className="hover:text-white transition-colors">Explore</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#science" className="hover:text-white transition-colors">Science</a>
          <a href="#specimens" className="hover:text-white transition-colors">Specimens</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="border border-white text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Discover
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-12 gap-12 w-full">
        {/* Left text */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-4">
            The Invisible World
          </p>
          <h1 id="hero-title" className="text-white font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-6">
            Micro<br />Cosmos
          </h1>
          <p id="hero-subtitle" className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-md mb-10">
            Journey into the breathtaking universe that exists beyond the naked eye — where cells dance, crystals bloom, and life pulses in extraordinary color.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#explore" className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-neutral-200 transition-all text-sm">
              Begin Journey
            </a>
            <a href="#gallery" className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all text-sm">
              View Gallery
            </a>
          </div>
        </div>

        {/* Right hero image */}
        <div className="flex-1 w-full max-w-xl">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]"
            data-strk-bg-id="hero-bg-a1b2c3"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <img
              alt="Microscopic world"
              className="w-full h-full object-cover"
              data-strk-img-id="hero-img-d4e5f6"
              data-strk-img="[hero-subtitle] [hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Overlay label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-xs font-medium tracking-widest uppercase">Magnification × 400</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t border-white/10 px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '10,000+', label: 'Species Documented' },
            { value: '0.001mm', label: 'Smallest Subject' },
            { value: '4K', label: 'Image Resolution' },
            { value: '50 yrs', label: 'Of Research' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-white font-black text-2xl md:text-3xl">{stat.value}</p>
              <p className="text-neutral-500 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
