import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BubbleCanvas from '../components/ui/BubbleCanvas.jsx';

const depthZones = [
  {
    depth: 0,
    label: 'Surface',
    meters: '0m',
    bg: 'linear-gradient(180deg, #001a66 0%, #000080 100%)',
    title: 'Where Light Meets Water',
    body: 'The surface shimmers with sunlight. Waves carry whispers of the world above. Here, the ocean breathes.',
    accent: '#00FFFF',
  },
  {
    depth: 1,
    label: 'Sunlight Zone',
    meters: '200m',
    bg: 'linear-gradient(180deg, #000080 0%, #000055 100%)',
    title: 'The Sunlight Zone',
    body: 'Photosynthesis thrives. Coral reefs burst with color. Life is abundant, vibrant, and fierce.',
    accent: '#7FFFD4',
  },
  {
    depth: 2,
    label: 'Twilight Zone',
    meters: '1,000m',
    bg: 'linear-gradient(180deg, #000055 0%, #000033 100%)',
    title: 'The Twilight Zone',
    body: 'Light fades to a cold blue. Pressure mounts. Strange silhouettes drift through the dimness.',
    accent: '#4488FF',
  },
  {
    depth: 3,
    label: 'Midnight Zone',
    meters: '4,000m',
    bg: 'linear-gradient(180deg, #000033 0%, #00001a 100%)',
    title: 'The Midnight Zone',
    body: 'Total darkness. No sunlight has ever reached here. Only bioluminescence breaks the void.',
    accent: '#2244AA',
  },
  {
    depth: 4,
    label: 'The Abyss',
    meters: '6,000m',
    bg: 'linear-gradient(180deg, #00001a 0%, #000510 100%)',
    title: 'The Abyss',
    body: 'Crushing pressure. Near-freezing temperatures. Yet life persists — alien, ancient, and extraordinary.',
    accent: '#000080',
  },
];

const DepthIndicator = ({ progress }) => {
  const totalMeters = 6000;
  const currentMeters = Math.round(progress * totalMeters);
  const zoneIndex = Math.min(Math.floor(progress * depthZones.length), depthZones.length - 1);
  const zone = depthZones[zoneIndex];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
      {/* Depth bar */}
      <div
        className="w-1 rounded-full overflow-hidden"
        style={{ height: '200px', background: 'rgba(0,0,128,0.3)', border: '1px solid rgba(0,255,255,0.2)' }}
      >
        <div
          className="w-full rounded-full transition-all duration-300"
          style={{
            height: `${progress * 100}%`,
            background: 'linear-gradient(180deg, #00FFFF, #000080)',
            boxShadow: '0 0 8px rgba(0,255,255,0.6)',
          }}
        />
      </div>
      {/* Depth label */}
      <div className="glass px-3 py-1 text-center" style={{ minWidth: '70px' }}>
        <div className="text-xs font-cinzel" style={{ color: zone.accent }}>{zone.label}</div>
        <div className="text-xs text-white/60">{currentMeters}m</div>
      </div>
    </div>
  );
};

const DepthSection = ({ zone, isVisible, index }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-24"
      style={{ position: 'relative' }}
    >
      <div
        className={`max-w-2xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      >
        {/* Zone badge */}
        <div
          className="inline-block px-4 py-1 rounded-full text-xs font-cinzel tracking-widest mb-6"
          style={{
            background: `rgba(0,0,0,0.4)`,
            border: `1px solid ${zone.accent}44`,
            color: zone.accent,
          }}
        >
          {zone.meters} depth · {zone.label}
        </div>

        {/* Title */}
        <h2
          className="font-cinzel font-bold mb-6 leading-tight"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            color: '#fff',
            textShadow: `0 0 40px ${zone.accent}66`,
          }}
        >
          {zone.title}
        </h2>

        {/* Body */}
        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif' }}
        >
          {zone.body}
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-24" style={{ background: `linear-gradient(90deg, transparent, ${zone.accent}66)` }} />
          <div
            className="w-2 h-2 rounded-full animate-pulse-glow"
            style={{ background: zone.accent, boxShadow: `0 0 12px ${zone.accent}` }}
          />
          <div className="h-px flex-1 max-w-24" style={{ background: `linear-gradient(90deg, ${zone.accent}66, transparent)` }} />
        </div>
      </div>
    </div>
  );
};

const Descending = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set([0]));
  const sectionRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setScrollProgress(progress);

      // Check which sections are visible
      sectionRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setVisibleSections(prev => new Set([...prev, i]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate background color based on scroll
  const zoneIndex = Math.min(
    Math.floor(scrollProgress * depthZones.length),
    depthZones.length - 1
  );
  const currentZone = depthZones[zoneIndex];

  return (
    <div style={{ position: 'relative', minHeight: '500vh' }}>
      {/* Dynamic background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: currentZone.bg,
          transition: 'background 1.2s ease',
          zIndex: 0,
        }}
      />

      <BubbleCanvas scrollProgress={scrollProgress} />
      <DepthIndicator progress={scrollProgress} />

      {/* Hero section */}
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10"
        ref={el => sectionRefs.current[0] = el}
      >
        {/* Animated orb */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 animate-float"
          style={{
            background: 'radial-gradient(circle, #00FFFF 0%, #000080 60%, transparent 100%)',
            filter: 'blur(40px)',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />

        <div className={`relative z-10 transition-all duration-1000 ${visibleSections.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs font-cinzel tracking-[0.4em] mb-4" style={{ color: '#00FFFF' }}>
            DESCEND INTO
          </p>
          <h1
            className="font-cinzel font-black mb-6"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              lineHeight: 1,
              background: 'linear-gradient(180deg, #ffffff 0%, #00FFFF 50%, #000080 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}
          >
            ABYSSOS
          </h1>
          <p
            className="text-xl max-w-lg mx-auto mb-10 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
          >
            Journey to the deepest reaches of the ocean. Where light dies and wonder begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-liquid" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
              Begin Descent
            </button>
            <button
              className="btn-liquid"
              style={{ background: 'transparent', color: 'rgba(255,255,255,0.7)' }}
              onClick={() => navigate('/reef')}
            >
              Explore The Reef →
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-xs tracking-widest font-cinzel" style={{ color: 'rgba(0,255,255,0.6)' }}>SCROLL TO DESCEND</span>
          <div className="w-px h-12" style={{ background: 'linear-gradient(180deg, rgba(0,255,255,0.6), transparent)' }} />
        </div>
      </div>

      {/* Depth zones */}
      {depthZones.slice(1).map((zone, i) => (
        <div
          key={zone.depth}
          className="relative z-10"
          ref={el => sectionRefs.current[i + 1] = el}
        >
          <DepthSection
            zone={zone}
            isVisible={visibleSections.has(i + 1)}
            index={i + 1}
          />
        </div>
      ))}

      {/* Final CTA at the bottom */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="glass p-12 max-w-xl mx-auto">
          <p className="text-xs font-cinzel tracking-widest mb-4" style={{ color: '#00FFFF' }}>YOU HAVE REACHED</p>
          <h2 className="font-cinzel font-bold text-4xl mb-4 text-white">The Abyss</h2>
          <p className="text-white/60 mb-8 font-inter">
            6,000 meters below the surface. Now explore the wonders that live here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-liquid" onClick={() => navigate('/reef')}>
              Visit The Reef
            </button>
            <button className="btn-liquid" onClick={() => navigate('/luminous')}>
              Luminous Life
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descending;
