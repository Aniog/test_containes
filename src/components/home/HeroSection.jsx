import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { MEMORIES, STATS } from '../../data/memories';
import { formatNumber } from '../../lib/utils';

const TYPEWRITER_PHRASES = [
  'a grandmother\'s hands braiding wheat',
  'the first word your child ever spoke',
  'the smell of rain on red dust',
  'watching Earth from orbit',
  'the last concert before departure',
  'a river turning from black to gold',
];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex < phrase.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!isDeleting && charIndex === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 30);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length);
    }

    setDisplayText(phrase.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Constellation background */}
      <ConstellationCanvas memories={MEMORIES} />

      {/* Nebula blobs */}
      <div
        className="nebula-blob"
        style={{ width: 600, height: 600, background: '#7c83fd', top: '10%', left: '5%' }}
      />
      <div
        className="nebula-blob"
        style={{ width: 500, height: 500, background: '#4ecdc4', bottom: '15%', right: '8%' }}
      />
      <div
        className="nebula-blob"
        style={{ width: 400, height: 400, background: '#ff6b9d', top: '40%', left: '40%' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/10 text-aurora-glow text-sm font-mono mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-jade animate-pulse-slow" />
          MNEMOSYNE ARCHIVE · ESTABLISHED 2051
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-starlight mb-6 leading-tight"
          style={{ textShadow: '0 0 60px rgba(124,131,253,0.3)' }}
        >
          Every Memory
          <br />
          <span className="shimmer-text">Humanity Ever Had</span>
        </h1>

        {/* Typewriter */}
        <p className="text-mist-light text-xl md:text-2xl mb-4 font-light">
          We are preserving
        </p>
        <div className="text-starlight text-2xl md:text-3xl font-medium mb-12 min-h-[2.5rem] cursor-blink">
          {displayText}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/explore"
            className="px-8 py-4 rounded-full bg-aurora text-white font-semibold text-lg transition-all duration-300 hover:bg-aurora-glow hover:shadow-[0_0_40px_rgba(124,131,253,0.5)] active:scale-95"
          >
            Explore Memories
          </Link>
          <Link
            to="/contribute"
            className="px-8 py-4 rounded-full border border-aurora/40 text-aurora-glow font-semibold text-lg transition-all duration-300 hover:border-aurora hover:bg-aurora/10 active:scale-95"
          >
            Contribute a Memory
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: formatNumber(STATS.totalMemories), label: 'Memories Preserved' },
            { value: formatNumber(STATS.contributors), label: 'Contributors' },
            { value: STATS.languages, label: 'Languages' },
            { value: STATS.countries, label: 'Countries' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-aurora-glow font-display mb-1">
                {stat.value}
              </div>
              <div className="text-mist text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist text-sm animate-bounce">
        <span>Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
