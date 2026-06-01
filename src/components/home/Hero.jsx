import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ConstellationCanvas from './ConstellationCanvas';
import { STATS } from '../../data/memories';

const formatNumber = (n) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
};

const StatItem = ({ value, label, delay }) => {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const step = end / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setDisplayed(end);
          clearInterval(interval);
        } else {
          setDisplayed(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-cinzel font-bold text-aurora-glow glow-text">
        {formatNumber(displayed)}
      </div>
      <div className="text-xs text-fog font-mono mt-1 uppercase tracking-widest">{label}</div>
    </div>
  );
};

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void">
      <ConstellationCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/20 to-void pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aurora/30 bg-aurora/5 text-aurora text-xs font-mono tracking-widest uppercase"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.3s' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-aurora animate-pulse inline-block" />
          Global Memory Initiative — Est. 2041
        </div>

        <h1
          className="font-cinzel font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s', transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <span className="gradient-text">Memory</span>
          <br />
          <span className="text-starlight">Archive</span>
        </h1>

        <p
          className="text-mist text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.8s, transform 1s ease 0.8s', transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          Before humanity crosses the stars, we preserve what made us human.
          Every memory, every story, every moment of joy and grief and wonder —
          carried forward into the infinite.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 1s' }}
        >
          <Link
            to="/explore"
            className="bg-aurora text-void font-semibold px-8 py-4 rounded-lg hover:bg-aurora-glow transition-all duration-300 text-center animate-pulse-glow"
          >
            Explore Memories
          </Link>
          <Link
            to="/contribute"
            className="border border-aurora/50 text-aurora px-8 py-4 rounded-lg hover:bg-aurora/10 transition-all duration-300 text-center"
          >
            Contribute Your Story
          </Link>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 1.2s' }}
        >
          <StatItem value={STATS.totalMemories} label="Memories" delay={1400} />
          <StatItem value={STATS.contributors} label="Contributors" delay={1600} />
          <StatItem value={STATS.languages} label="Languages" delay={1800} />
          <StatItem value={STATS.yearsSpanned} label="Years Spanned" delay={2000} />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-fog text-xs font-mono animate-bounce">
        <span>Scroll to explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 4v16M2 14l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
