import { useEffect, useRef } from 'react';
import { Play, ChevronRight, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '128', label: 'Live Matches' },
  { value: '32', label: 'Top Leagues' },
  { value: '4.2M', label: 'Fans Online' },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-pitch via-pitch/85 to-pitch/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-pitch via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Live Now</span>
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight mb-4"
          >
            The Beautiful<br />
            <span className="text-soccer-green">Game</span> Awaits
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
          >
            Live scores, match highlights, and breaking news from the world's top football leagues — all in one place.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <button className="flex items-center gap-2 bg-soccer-green hover:bg-soccer-green-light text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-base">
              <Play className="w-5 h-5 fill-white" />
              Watch Highlights
            </button>
            <button className="flex items-center gap-2 border border-gray-600 hover:border-soccer-green text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-base bg-transparent">
              Live Scores
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-soccer-green flex-shrink-0" />
                <div>
                  <div className="text-2xl font-black text-soccer-yellow">{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
