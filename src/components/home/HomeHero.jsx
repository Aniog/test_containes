import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Tag, Newspaper } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0f0f13] via-[#0f0f13]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-violet-500/20 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full border border-violet-500/30">
              🎮 Your Gaming Hub
            </span>
          </div>
          <h1 id="hero-title" className="text-5xl md:text-7xl font-black tracking-tight text-white leading-none mb-4">
            Games, Deals &<br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              News — All Here
            </span>
          </h1>
          <p id="hero-subtitle" className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            Discover the best game deals across Steam, Epic, Nintendo, PlayStation, and Xbox. Plus the latest gaming news and reviews.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/deals"
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Tag className="w-4 h-4" />
              Browse Deals
            </Link>
            <Link
              to="/store"
              className="flex items-center gap-2 bg-[#1e1e2a] hover:bg-[#2a2a3a] text-white border border-[#2a2a3a] font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Zap className="w-4 h-4" />
              Visit Store
            </Link>
            <Link
              to="/news"
              className="flex items-center gap-2 text-gray-400 hover:text-white font-medium px-4 py-3 transition-colors"
            >
              <Newspaper className="w-4 h-4" />
              Latest News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            {[
              { value: '500+', label: 'Active Deals' },
              { value: '5', label: 'Platforms' },
              { value: '10K+', label: 'Games Listed' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
