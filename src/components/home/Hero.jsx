import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-forest overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/50" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Trending badge */}
          <div className="inline-flex items-center gap-2 bg-sage/20 border border-sage/40 text-sage text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Trending This Week</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Discover the Wonders of Our Natural World
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/75 leading-relaxed mb-8"
          >
            In-depth science articles, nature discoveries, and environmental insights — curated for the curious mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#articles"
              className="inline-flex items-center justify-center gap-2 bg-sage text-forest font-semibold px-7 py-3.5 rounded-full hover:bg-white transition-colors"
            >
              Explore Articles
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:border-sage hover:text-sage transition-colors"
            >
              Browse Topics
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-8">
          {[
            { value: '1,200+', label: 'Articles Published' },
            { value: '48', label: 'Expert Contributors' },
            { value: '320K', label: 'Monthly Readers' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-sage">{stat.value}</div>
              <div className="text-sm text-white/60 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
