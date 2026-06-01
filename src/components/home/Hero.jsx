import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const ROTATING_PHRASES = [
  'A grandmother\'s lullaby in a forgotten tongue',
  'The last harvest before the great drought',
  'A child\'s first glimpse of the ocean',
  'The night the stars finally answered back',
  'Two hands meeting across a century of silence',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % ROTATING_PHRASES.length);
        setVisible(true);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* Constellation background */}
      <div className="absolute inset-0 z-0">
        <ConstellationCanvas />
      </div>

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(3,4,10,0.7) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #03040a)' }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        {/* Archive badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-aurora animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-aurora-light uppercase">
            Archive Active · {STATS.totalMemories} Memories Preserved
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-light tracking-widest text-starlight mb-4 text-glow-aurora">
          The Memory
        </h1>
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-light tracking-widest text-aurora-light mb-8 text-glow-aurora">
          Archive
        </h1>

        {/* Subtitle */}
        <p className="text-mist text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-4 leading-relaxed">
          Before humanity crosses the void between stars, we preserve what made us human.
          Every memory. Every voice. Every moment of light.
        </p>

        {/* Rotating memory fragment */}
        <div className="h-12 flex items-center justify-center mb-12">
          <p
            className="text-memory-light font-mono text-sm md:text-base italic transition-opacity duration-500"
            style={{ opacity: visible ? 1 : 0 }}
          >
            "{ROTATING_PHRASES[phraseIndex]}"
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/explore"
            className="px-8 py-3.5 rounded-full bg-aurora hover:bg-aurora/80 text-white font-medium tracking-wide transition-all duration-300 glow-aurora hover:scale-105"
          >
            Explore Memories
          </Link>
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-full border border-aurora/40 text-aurora-light hover:bg-aurora/10 font-medium tracking-wide transition-all duration-300"
          >
            About the Archive
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs font-mono tracking-widest text-ghost uppercase">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-ghost to-transparent" />
      </div>
    </section>
  );
}
