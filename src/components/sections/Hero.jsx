import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2c1f14]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2c1f14]/60 via-transparent to-[#2c1f14]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-[#e8650a]/20 border border-[#e8650a]/40 text-[#f0a060] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          The Ultimate PC Gaming Platform
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight mb-6"
        >
          Your World of<br />
          <span className="text-[#e8650a]">Steam Games</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-[#d4c4b0] max-w-2xl mx-auto mb-10"
        >
          Discover thousands of games — from epic AAA blockbusters to indie gems.
          Buy, play, and connect with millions of gamers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#featured"
            className="bg-[#e8650a] hover:bg-[#c9540a] text-white font-semibold px-8 py-4 rounded-lg transition text-base"
          >
            Browse Games
          </a>
          <a
            href="#top-sellers"
            className="border border-[#4a3020] hover:border-[#e8650a] text-[#d4c4b0] hover:text-white font-semibold px-8 py-4 rounded-lg transition text-base"
          >
            Top Sellers
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '50,000+', label: 'Games' },
            { value: '132M', label: 'Active Users' },
            { value: '30+', label: 'Languages' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[#e8650a]">{stat.value}</div>
              <div className="text-xs text-[#a09080] mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#featured"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#a09080] hover:text-white transition animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
