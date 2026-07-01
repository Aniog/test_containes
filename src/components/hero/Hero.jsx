import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Zap, TrendingUp, Star } from 'lucide-react';

const stats = [
  { icon: Zap, label: 'Active Deals', value: '500+' },
  { icon: TrendingUp, label: 'Games Listed', value: '10K+' },
  { icon: Star, label: 'Happy Gamers', value: '250K+' },
];

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-game-bg via-game-bg/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-game-bg via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-game-purple/20 border border-game-purple/40 text-game-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Zap className="w-3 h-3" />
            <span>Best Gaming Deals — Updated Daily</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-extrabold text-game-text leading-tight tracking-tight mb-4"
          >
            Your Ultimate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-game-purple to-game-cyan">
              Gaming Hub
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-game-muted text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
          >
            Discover the hottest deals across Steam, Epic, Nintendo, PlayStation, and Xbox.
            Read the latest gaming news, and shop our curated game store.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#deals"
              className="inline-flex items-center gap-2 bg-game-purple hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Browse Deals
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#store"
              className="inline-flex items-center gap-2 border border-game-border text-game-muted hover:text-game-text hover:border-game-purple/60 font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Visit Store
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-game-card border border-game-border rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-game-purple" />
                </div>
                <div>
                  <div className="text-game-text font-bold text-lg leading-none">{value}</div>
                  <div className="text-game-muted text-xs mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
