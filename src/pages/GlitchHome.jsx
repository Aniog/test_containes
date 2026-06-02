import { useEffect, useRef, useState, useCallback } from 'react';

const GLITCH_LINES = [
  'SIGNAL LOST',
  'REALITY.EXE HAS STOPPED',
  'ENTER THE VOID',
  'FREQUENCY: 404Hz',
  'BUFFER OVERFLOW',
  'NULL POINTER EXCEPTION',
];

export default function GlitchHome({ onNavigate }) {
  const [glitchLine, setGlitchLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [rgbShift, setRgbShift] = useState(false);
  const [titleGlitch, setTitleGlitch] = useState(false);

  useEffect(() => {
    const lineTimer = setInterval(() => setGlitchLine((l) => (l + 1) % GLITCH_LINES.length), 2200);
    const cursorTimer = setInterval(() => setShowCursor((c) => !c), 530);
    const rgbTimer = setInterval(() => {
      setRgbShift(true);
      setTimeout(() => setRgbShift(false), 160);
    }, 3200);
    const titleTimer = setInterval(() => {
      setTitleGlitch(true);
      setTimeout(() => setTitleGlitch(false), 300);
    }, 4000);
    return () => {
      clearInterval(lineTimer);
      clearInterval(cursorTimer);
      clearInterval(rgbTimer);
      clearInterval(titleTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: '#0A0010' }}>
      {/* Animated gradient blobs — simulates video background */}
      <AnimatedBackground />

      {/* Scan lines */}
      <div className="glitch-video-overlay z-10" />

      {/* Glitch bars */}
      <GlitchBars />

      {/* Main content */}
      <div
        className="relative z-20 flex flex-col justify-center h-full px-8 md:px-16 pb-24"
        style={{ filter: rgbShift ? 'url(#chromatic-aberration)' : 'none' }}
      >
        {/* Top label */}
        <div className="mb-6 flex items-center gap-4">
          <div className="w-8 h-px" style={{ background: '#CCFF00', boxShadow: '0 0 10px #CCFF00, 0 0 20px rgba(204,255,0,0.4)' }} />
          <span className="font-mono text-xs uppercase" style={{ color: '#CCFF00', letterSpacing: '0.3em' }}>
            ACID-WAVE COLLECTIVE — EST. 2024
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-2 overflow-visible">
          <h1
            className={`glitch-text font-display font-black uppercase leading-none ${titleGlitch ? 'title-glitch-active' : ''}`}
            data-text="THE GLITCH"
            style={{
              fontSize: 'clamp(4.5rem, 15vw, 13rem)',
              color: '#CCFF00',
              letterSpacing: '-0.04em',
              transform: 'scaleX(1.06)',
              transformOrigin: 'left center',
              textShadow: '0 0 60px rgba(204,255,0,0.5), 0 0 120px rgba(204,255,0,0.2)',
              lineHeight: 0.88,
            }}
          >
            THE GLITCH
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <h2
            className="font-display font-black uppercase"
            style={{
              fontSize: 'clamp(1.8rem, 5.5vw, 4.5rem)',
              color: '#F0F0F0',
              letterSpacing: '-0.02em',
              transform: 'scaleX(1.06)',
              transformOrigin: 'left center',
              lineHeight: 1,
            }}
          >
            IS THE{' '}
            <span style={{ color: '#7B00FF', textShadow: '0 0 30px rgba(123,0,255,0.6)' }}>MESSAGE</span>
          </h2>
        </div>

        {/* Status line */}
        <div className="font-mono text-sm mb-10" style={{ color: 'rgba(204,255,0,0.7)', letterSpacing: '0.1em' }}>
          <span style={{ color: '#FF00CC' }}>▶</span>{' '}
          {GLITCH_LINES[glitchLine]}
          <span style={{ opacity: showCursor ? 1 : 0, color: '#CCFF00' }}>_</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <CtaButton solid onClick={() => onNavigate('/works')}>VIEW WORKS</CtaButton>
          <CtaButton onClick={() => onNavigate('/manifesto')}>READ MANIFESTO</CtaButton>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-24 right-8 md:right-16 flex flex-col items-center gap-2"
          style={{ color: 'rgba(204,255,0,0.35)' }}
        >
          <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, transparent, #CCFF00)', animation: 'scroll-pulse 2s ease-in-out infinite' }} />
          <span className="font-mono" style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em', fontSize: '0.55rem' }}>SCROLL</span>
        </div>
      </div>

      {/* Corner brackets */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />

      {/* Data readout */}
      <DataReadout />

      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(60px,-40px) scale(1.15); }
          66% { transform: translate(-40px,60px) scale(0.9); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(-80px,50px) scale(1.2); }
          66% { transform: translate(50px,-30px) scale(0.85); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px,40px) scale(1.1); }
        }
        @keyframes scroll-pulse {
          0%,100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .title-glitch-active {
          animation: title-burst 0.3s steps(3) forwards !important;
        }
        @keyframes title-burst {
          0% { transform: scaleX(1.06) translateX(0); }
          25% { transform: scaleX(1.06) translateX(-6px); filter: hue-rotate(90deg); }
          50% { transform: scaleX(1.06) translateX(8px); filter: hue-rotate(-90deg); }
          75% { transform: scaleX(1.06) translateX(-3px); }
          100% { transform: scaleX(1.06) translateX(0); }
        }
      `}</style>
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 120% 120% at 50% 50%, #1A0033 0%, #0A0010 70%)' }} />
      {/* Blob 1 — electric purple */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '70vw', height: '70vw',
          top: '-10%', left: '-15%',
          background: 'radial-gradient(circle, rgba(123,0,255,0.45) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'blob1 12s ease-in-out infinite',
        }}
      />
      {/* Blob 2 — acid green */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '50vw', height: '50vw',
          bottom: '5%', right: '-10%',
          background: 'radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'blob2 16s ease-in-out infinite',
        }}
      />
      {/* Blob 3 — magenta */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '40vw', height: '40vw',
          top: '30%', right: '20%',
          background: 'radial-gradient(circle, rgba(255,0,204,0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'blob3 10s ease-in-out infinite',
        }}
      />
      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.07,
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}

function GlitchBars() {
  const bars = [
    { top: '12%', h: 2, delay: '0s', dur: '4.5s', color: 'rgba(255,0,204,0.7)' },
    { top: '38%', h: 1, delay: '1.4s', dur: '3.2s', color: 'rgba(123,0,255,0.6)' },
    { top: '61%', h: 3, delay: '0.7s', dur: '5.5s', color: 'rgba(204,255,0,0.35)' },
    { top: '79%', h: 1, delay: '2.1s', dur: '3.8s', color: 'rgba(255,0,204,0.5)' },
    { top: '91%', h: 2, delay: '0.3s', dur: '6s', color: 'rgba(123,0,255,0.4)' },
  ];
  return (
    <>
      {bars.map((b, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: b.top, height: b.h, background: b.color, zIndex: 15,
            animation: `glitch-bar-h ${b.dur} ${b.delay} steps(1) infinite`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        @keyframes glitch-bar-h {
          0%,88%,100% { opacity:0; transform:translateX(0) scaleX(1); }
          89% { opacity:1; transform:translateX(-12px) scaleX(0.95); }
          91% { opacity:1; transform:translateX(18px) scaleX(1.05); }
          93% { opacity:0.6; transform:translateX(-6px) scaleX(0.98); }
          95% { opacity:1; transform:translateX(0) scaleX(1); }
          97% { opacity:0; }
        }
      `}</style>
    </>
  );
}

function CtaButton({ children, onClick, solid }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="font-display font-black uppercase"
      style={{
        padding: '14px 32px',
        fontSize: '0.8rem',
        letterSpacing: '0.22em',
        cursor: 'pointer',
        border: solid ? 'none' : '1px solid #CCFF00',
        background: solid
          ? (hov ? '#EEFF44' : '#CCFF00')
          : (hov ? 'rgba(204,255,0,0.12)' : 'transparent'),
        color: solid ? '#0A0010' : '#CCFF00',
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
        boxShadow: hov
          ? (solid ? '0 0 30px #CCFF00, 0 0 60px rgba(204,255,0,0.3)' : '0 0 20px rgba(204,255,0,0.3)')
          : 'none',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      {children}
    </button>
  );
}

function CornerBracket({ pos }) {
  const top = pos.startsWith('t');
  const left = pos.endsWith('l');
  return (
    <div
      className="absolute z-20 pointer-events-none"
      style={{
        top: top ? '1.5rem' : 'auto',
        bottom: top ? 'auto' : '5.5rem',
        left: left ? '1.5rem' : 'auto',
        right: left ? 'auto' : '1.5rem',
        width: 48, height: 48,
        borderTop: top ? '2px solid rgba(204,255,0,0.5)' : 'none',
        borderBottom: top ? 'none' : '2px solid rgba(204,255,0,0.5)',
        borderLeft: left ? '2px solid rgba(204,255,0,0.5)' : 'none',
        borderRight: left ? 'none' : '2px solid rgba(204,255,0,0.5)',
      }}
    />
  );
}

function DataReadout() {
  const [tick, setTick] = useState(0);
  const hexRef = useRef(() => Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase().padStart(4, '0'));
  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 800);
    return () => clearInterval(t);
  }, []);
  const h = hexRef.current;
  return (
    <div
      className="absolute top-6 right-6 z-20 font-mono pointer-events-none hidden md:block"
      style={{ color: 'rgba(204,255,0,0.22)', lineHeight: 2, fontSize: '0.58rem', letterSpacing: '0.12em' }}
    >
      <div>SYS: ONLINE</div>
      <div>FREQ: {(440 + tick * 11) % 999}Hz</div>
      <div>MEM: 0x{h()}</div>
      <div>GLITCH: ACTIVE</div>
      <div style={{ color: 'rgba(255,0,204,0.45)' }}>ERR: {h()}</div>
      <div style={{ color: 'rgba(123,0,255,0.4)' }}>VOID: {h()}</div>
    </div>
  );
}
