import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Play, ChevronDown, Star } from 'lucide-react';

const FLOATING_OBJECTS = [
  { emoji: '🌙', x: 10, y: 25, delay: 0, size: 'text-4xl' },
  { emoji: '⭐', x: 85, y: 15, delay: 1.5, size: 'text-2xl' },
  { emoji: '🔮', x: 75, y: 70, delay: 3, size: 'text-3xl' },
  { emoji: '✨', x: 20, y: 75, delay: 2, size: 'text-xl' },
  { emoji: '🌌', x: 90, y: 50, delay: 0.5, size: 'text-2xl' },
  { emoji: '💫', x: 5, y: 55, delay: 4, size: 'text-3xl' },
  { emoji: '🌠', x: 60, y: 85, delay: 2.5, size: 'text-2xl' },
  { emoji: '🪐', x: 40, y: 10, delay: 1, size: 'text-3xl' },
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Floating objects */}
      {FLOATING_OBJECTS.map((obj, i) => (
        <div
          key={i}
          className="absolute animate-float-slow select-none pointer-events-none"
          style={{
            left: `${obj.x}%`,
            top: `${obj.y}%`,
            animationDelay: `${obj.delay}s`,
            fontSize: obj.size === 'text-4xl' ? '2.5rem' : obj.size === 'text-3xl' ? '2rem' : obj.size === 'text-2xl' ? '1.5rem' : '1.25rem',
            opacity: 0.6,
            filter: 'drop-shadow(0 0 10px rgba(192,132,252,0.5))',
          }}
        >
          {obj.emoji}
        </div>
      ))}

      {/* Hero content */}
      <div className={`relative z-10 text-center max-w-5xl mx-auto transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-body mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>The World's First Dream Marketplace</span>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Main headline */}
        <h1 className="font-dream text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-6">
          <span className="block text-white">Trade Your</span>
          <span className="block text-shimmer mt-2">Dreams</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-purple-200/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore, buy, and sell AI-generated dream experiences. From cosmic odysseys to intimate romances — every dream is a collectible masterpiece.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/marketplace"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/40 font-body"
          >
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Explore Dreams
          </Link>
          <Link
            to="/generator"
            className="flex items-center gap-3 px-8 py-4 rounded-full glass border border-purple-500/30 text-purple-200 font-semibold text-lg hover:bg-white/10 transition-all duration-300 font-body"
          >
            <Play className="w-5 h-5" />
            Generate a Dream
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {[
            { value: '48,200+', label: 'Dreams Listed' },
            { value: '12,400+', label: 'Dream Creators' },
            { value: '2.1M+', label: 'Experiences Sold' },
            { value: '4.9', label: 'Avg Rating', icon: <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> },
          ].map(({ value, label, icon }) => (
            <div key={label} className="text-center">
              <div className="flex items-center justify-center gap-1">
                {icon}
                <span className="font-dream text-2xl sm:text-3xl font-bold text-white">{value}</span>
              </div>
              <p className="text-purple-300/50 text-xs font-body mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-purple-300/40 animate-bounce">
        <span className="text-xs font-body">Scroll to explore</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
