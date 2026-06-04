import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="pt-16 bg-[#F5FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 md:py-24">
          {/* Text */}
          <div>
            <span className="inline-block bg-[#E8F7F4] text-[#3DBFA8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md mb-5">
              The Invisible Universe
            </span>
            <h1
              id="hero-title"
              className="text-5xl md:text-6xl font-black tracking-tight text-[#2C3E50] leading-tight mb-5"
            >
              Life at the<br />
              <span className="text-[#3DBFA8]">Micro Scale</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg text-[#7F8C8D] leading-relaxed mb-8 max-w-md"
            >
              Dive into the hidden world of microorganisms — the ancient, resilient, and endlessly fascinating life forms that shape our planet and our bodies.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-[#3DBFA8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2CA898] transition-colors"
              >
                Start Exploring <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-white text-[#2C3E50] font-semibold px-6 py-3 rounded-lg border border-[#D9EDE8] hover:bg-[#F5FAF8] transition-colors"
              >
                View Gallery
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-[#D9EDE8]">
              {[
                { value: '10³⁰', label: 'Microbes on Earth' },
                { value: '99%', label: 'Species Undiscovered' },
                { value: '3.8B yrs', label: 'Evolution' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-[#3DBFA8]">{stat.value}</div>
                  <div className="text-xs text-[#7F8C8D] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#D9EDE8]">
              <img
                alt="Microscopic life"
                data-strk-img-id="home-hero-img-a1b2c3"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            {/* Floating tag */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#D9EDE8] rounded-xl px-4 py-3">
              <div className="text-xs text-[#7F8C8D] uppercase tracking-widest font-bold">Featured</div>
              <div className="text-sm font-bold text-[#2C3E50] mt-0.5">Tardigrade · Water Bear</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;

