import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ParticleCanvas from '../components/ui/ParticleCanvas.jsx';

const DEPTH_ZONES = [
  {
    depth: 0,
    name: 'Surface',
    meters: '0m',
    bg: 'linear-gradient(180deg, #001a4d 0%, #000080 100%)',
    accent: '#00FFFF',
    description: 'Where sunlight kisses the sea. The world above fades as you take your first breath and descend.',
  },
  {
    depth: 1,
    name: 'Twilight Zone',
    meters: '200m',
    bg: 'linear-gradient(180deg, #000060 0%, #000040 100%)',
    accent: '#00CCFF',
    description: 'Light becomes a memory. Pressure builds. Strange silhouettes drift past in the dimming blue.',
  },
  {
    depth: 2,
    name: 'Midnight Zone',
    meters: '1,000m',
    bg: 'linear-gradient(180deg, #000030 0%, #000020 100%)',
    accent: '#0088CC',
    description: 'Total darkness. Only bioluminescence breaks the void — cold sparks of life in an eternal night.',
  },
  {
    depth: 3,
    name: 'The Abyss',
    meters: '4,000m',
    bg: 'linear-gradient(180deg, #000015 0%, #000005 100%)',
    accent: '#004488',
    description: 'The crushing deep. Few have witnessed this realm. Ancient, silent, and utterly alien.',
  },
  {
    depth: 4,
    name: 'Hadal Zone',
    meters: '11,000m',
    bg: 'linear-gradient(180deg, #000005 0%, #000000 100%)',
    accent: '#002244',
    description: 'The deepest trenches on Earth. Here, at the very bottom, life still finds a way.',
  },
];

export default function Descending() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentZone, setCurrentZone] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);

      const zoneIndex = Math.min(
        Math.floor(progress * DEPTH_ZONES.length),
        DEPTH_ZONES.length - 1
      );
      setCurrentZone(zoneIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const zone = DEPTH_ZONES[currentZone];
  const nextZone = DEPTH_ZONES[Math.min(currentZone + 1, DEPTH_ZONES.length - 1)];

  // Interpolate background between zones
  const zoneProgress = (scrollProgress * DEPTH_ZONES.length) % 1;

  return (
    <div ref={containerRef} className="relative">
      {/* Fixed background that transitions */}
      <div
        className="fixed inset-0 transition-all duration-1000"
        style={{
          background: zone.bg,
          zIndex: 0,
        }}
      />

      {/* Depth overlay — gets darker with scroll */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `rgba(0, 0, 0, ${scrollProgress * 0.7})`,
          zIndex: 0,
        }}
      />

      {/* Particle canvas */}
      <div className="fixed inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <ParticleCanvas scrollProgress={scrollProgress} />
      </div>

      {/* Depth meter — fixed right side */}
      <div
        className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 10 }}
      >
        <span
          className="text-xs tracking-widest uppercase mb-2"
          style={{ fontFamily: 'Cinzel, serif', color: zone.accent, writingMode: 'vertical-rl' }}
        >
          Depth
        </span>
        <div
          className="w-1 rounded-full overflow-hidden"
          style={{ height: '200px', background: 'rgba(255,255,255,0.1)' }}
        >
          <div
            className="w-full rounded-full transition-all duration-300"
            style={{
              height: `${scrollProgress * 100}%`,
              background: `linear-gradient(180deg, #00FFFF, ${zone.accent})`,
              boxShadow: `0 0 10px ${zone.accent}`,
            }}
          />
        </div>
        <span
          className="text-xs mt-2 font-mono"
          style={{ color: zone.accent }}
        >
          {zone.meters}
        </span>
      </div>

      {/* Sections */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="page-enter">
            <p
              className="text-sm tracking-[0.4em] uppercase mb-6"
              style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF', opacity: 0.7 }}
            >
              Welcome to
            </p>
            <h1
              className="text-7xl md:text-9xl font-black tracking-widest mb-6 text-glow"
              style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF' }}
            >
              ABYSSOS
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
            >
              Descend into the unknown. Explore the ocean's most mysterious realms —
              from sunlit reefs to lightless trenches where no human has ever ventured.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="btn-liquid text-sm"
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              >
                Begin Descent
              </button>
              <Link
                to="/reef"
                className="flex items-center gap-2 text-sm tracking-widest uppercase transition-all duration-300 hover:gap-3"
                style={{ fontFamily: 'Cinzel, serif', color: 'rgba(255,255,255,0.6)' }}
              >
                Explore The Reef <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto" style={{ color: 'rgba(0,255,255,0.5)' }} />
            </div>
          </div>
        </section>

        {/* Depth Zone Sections */}
        {DEPTH_ZONES.map((z, i) => (
          <section
            key={z.depth}
            className="min-h-screen flex items-center justify-center px-6"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Zone indicator */}
              <div
                className="inline-flex items-center gap-3 px-6 py-2 rounded-full mb-8"
                style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: `1px solid ${z.accent}40`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: z.accent, boxShadow: `0 0 8px ${z.accent}` }}
                />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Cinzel, serif', color: z.accent }}
                >
                  {z.meters} depth
                </span>
              </div>

              <h2
                className="text-5xl md:text-7xl font-bold tracking-widest mb-8"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: z.accent,
                  textShadow: `0 0 30px ${z.accent}60`,
                }}
              >
                {z.name}
              </h2>

              <p
                className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {z.description}
              </p>

              {/* Decorative depth line */}
              <div className="flex items-center justify-center gap-4">
                <div
                  className="h-px flex-1 max-w-32"
                  style={{ background: `linear-gradient(90deg, transparent, ${z.accent}60)` }}
                />
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: z.accent,
                    boxShadow: `0 0 15px ${z.accent}, 0 0 30px ${z.accent}60`,
                  }}
                />
                <div
                  className="h-px flex-1 max-w-32"
                  style={{ background: `linear-gradient(90deg, ${z.accent}60, transparent)` }}
                />
              </div>

              {/* Pressure stat */}
              <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
                {[
                  { label: 'Pressure', value: `${(1 + i * 100).toLocaleString()} atm` },
                  { label: 'Temperature', value: `${Math.max(1, 15 - i * 3)}°C` },
                  { label: 'Light', value: i === 0 ? '100%' : i === 1 ? '1%' : '0%' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-2xl p-4 text-center"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      border: `1px solid ${z.accent}20`,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div
                      className="text-lg font-bold mb-1"
                      style={{ color: z.accent, fontFamily: 'Cinzel, serif' }}
                    >
                      {value}
                    </div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="min-h-screen flex items-center justify-center px-6 text-center">
          <div>
            <p
              className="text-sm tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: 'Cinzel, serif', color: 'rgba(0,255,255,0.4)' }}
            >
              You've reached the bottom
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold tracking-widest mb-8"
              style={{ fontFamily: 'Cinzel, serif', color: 'rgba(0,255,255,0.6)' }}
            >
              Now Explore
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reef" className="btn-liquid text-sm">
                The Reef →
              </Link>
              <Link
                to="/luminous"
                className="btn-liquid text-sm"
                style={{ background: 'linear-gradient(135deg, #001a00, #003300)' }}
              >
                Luminous Life →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
