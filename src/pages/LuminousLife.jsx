import { useEffect, useRef, useState, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CREATURES = [
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    latin: 'Melanocetus johnsonii',
    depth: '200–2,000m',
    glow: '#00FFFF',
    glowSecondary: '#0088FF',
    fact: 'The anglerfish\'s bioluminescent lure is produced by symbiotic bacteria. It dangles above its mouth to attract prey in the pitch-black deep.',
    rarity: 'Rare',
  },
  {
    id: 'jellyfish',
    name: 'Crystal Jellyfish',
    latin: 'Aequorea victoria',
    depth: '0–750m',
    glow: '#88FFFF',
    glowSecondary: '#00FFAA',
    fact: 'This jellyfish produces green fluorescent protein (GFP), which revolutionized biological research and earned a Nobel Prize in Chemistry.',
    rarity: 'Common',
  },
  {
    id: 'firefly-squid',
    name: 'Firefly Squid',
    latin: 'Watasenia scintillans',
    depth: '0–600m',
    glow: '#4488FF',
    glowSecondary: '#0044CC',
    fact: 'Thousands of firefly squid gather in Toyama Bay, Japan each spring, turning the water into a shimmering blue spectacle visible from shore.',
    rarity: 'Seasonal',
  },
  {
    id: 'comb-jelly',
    name: 'Comb Jelly',
    latin: 'Mnemiopsis leidyi',
    depth: '0–1,000m',
    glow: '#FF44FF',
    glowSecondary: '#AA00FF',
    fact: 'Comb jellies use rows of cilia to swim, diffracting light into rainbow patterns. They are among the oldest animal lineages on Earth.',
    rarity: 'Common',
  },
  {
    id: 'dragonfish',
    name: 'Black Dragonfish',
    latin: 'Idiacanthus atlanticus',
    depth: '200–2,000m',
    glow: '#FF2200',
    glowSecondary: '#FF6600',
    fact: 'The dragonfish can produce red bioluminescence — invisible to most deep-sea creatures — giving it a secret "night vision" advantage.',
    rarity: 'Rare',
  },
  {
    id: 'sea-sparkle',
    name: 'Sea Sparkle',
    latin: 'Noctiluca scintillans',
    depth: '0–200m',
    glow: '#00FFAA',
    glowSecondary: '#00FF66',
    fact: 'When disturbed, these single-celled organisms flash blue-green light. Entire bays can glow at night when millions gather together.',
    rarity: 'Abundant',
  },
];

const SPOTLIGHT_RADIUS = 140;

function SpotlightCanvas({ mousePos, containerRef }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const currentPos = useRef({ x: -500, y: -500 });
  const targetPos = useRef({ x: -500, y: -500 });

  useEffect(() => {
    targetPos.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      // Smooth follow
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

      const { x, y } = currentPos.current;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Dark overlay
      ctx.fillStyle = 'rgba(0, 0, 5, 0.94)';
      ctx.fillRect(0, 0, w, h);

      // Spotlight cutout
      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_RADIUS);
      grad.addColorStop(0, 'rgba(0,0,0,1)');
      grad.addColorStop(0.4, 'rgba(0,0,0,0.95)');
      grad.addColorStop(0.7, 'rgba(0,0,0,0.7)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, SPOTLIGHT_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      // Subtle cyan rim glow
      const rimGrad = ctx.createRadialGradient(x, y, SPOTLIGHT_RADIUS * 0.8, x, y, SPOTLIGHT_RADIUS * 1.3);
      rimGrad.addColorStop(0, 'rgba(0,255,255,0)');
      rimGrad.addColorStop(0.5, 'rgba(0,255,255,0.04)');
      rimGrad.addColorStop(1, 'rgba(0,255,255,0)');
      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(x, y, SPOTLIGHT_RADIUS * 1.3, 0, Math.PI * 2);
      ctx.fill();

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5, borderRadius: 'inherit' }}
    />
  );
}

function CreatureCard({ creature, index, onSelect }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [localMouse, setLocalMouse] = useState({ x: -500, y: -500 });
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLocalMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setLocalMouse({ x: -500, y: -500 });
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
        transition: `all 0.9s ease ${index * 0.12}s`,
      }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-3xl cursor-crosshair group"
        style={{ minHeight: '380px', background: '#000005' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(creature)}
      >
        {/* The creature image — always visible underneath */}
        <img
          data-strk-img-id={`lumi-card-${creature.id}-img`}
          data-strk-img={`[lumi-card-${creature.id}-fact] [lumi-card-${creature.id}-name] [lumi-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={creature.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: `saturate(0.3) brightness(0.4) hue-rotate(${creature.glow === '#FF2200' ? '0deg' : '180deg'})`,
          }}
        />

        {/* Bioluminescent glow overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 50%, ${creature.glow}15 0%, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
        />

        {/* Spotlight darkness overlay */}
        <SpotlightCanvas mousePos={localMouse} containerRef={containerRef} />

        {/* Bottom info — always visible */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5"
          style={{
            background: 'linear-gradient(0deg, rgba(0,0,5,0.95) 0%, transparent 100%)',
            zIndex: 10,
          }}
        >
          {/* Rarity badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-2 text-xs tracking-widest uppercase"
            style={{
              background: `${creature.glow}15`,
              border: `1px solid ${creature.glow}40`,
              color: creature.glow,
              fontFamily: 'Cinzel, serif',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: creature.glow, boxShadow: `0 0 6px ${creature.glow}` }}
            />
            {creature.rarity}
          </div>

          <h3
            id={`lumi-card-${creature.id}-name`}
            className="text-lg font-bold mb-0.5"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#ffffff',
              textShadow: `0 0 15px ${creature.glow}60`,
            }}
          >
            {creature.name}
          </h3>
          <p
            className="text-xs italic mb-2"
            style={{ color: creature.glow, opacity: 0.8 }}
          >
            {creature.latin}
          </p>
          <p
            id={`lumi-card-${creature.id}-fact`}
            className="text-xs leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', display: 'none' }}
          >
            {creature.fact}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1 h-1 rounded-full" style={{ background: creature.glow }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {creature.depth}
            </span>
          </div>
        </div>

        {/* Hover hint */}
        <div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ zIndex: 10 }}
        >
          <div
            className="px-3 py-1.5 rounded-full text-xs tracking-widest"
            style={{
              background: 'rgba(0,0,0,0.7)',
              border: `1px solid ${creature.glow}40`,
              color: creature.glow,
              fontFamily: 'Cinzel, serif',
            }}
          >
            Shine light →
          </div>
        </div>
      </div>
    </div>
  );
}

function CreatureModal({ creature, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!creature) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{ zIndex: 100, background: 'rgba(0,0,5,0.9)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(0,5,20,0.95)',
          border: `1px solid ${creature.glow}40`,
          boxShadow: `0 0 60px ${creature.glow}20`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            data-strk-img-id={`lumi-modal-${creature.id}-img`}
            data-strk-img={`[lumi-modal-${creature.id}-name] [lumi-page-title]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={creature.name}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.4) brightness(0.7)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${creature.glow}20 0%, transparent 70%)`,
              mixBlendMode: 'screen',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,5,20,0.95) 0%, transparent 60%)' }}
          />
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2
                id={`lumi-modal-${creature.id}-name`}
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: '#ffffff',
                  textShadow: `0 0 20px ${creature.glow}60`,
                }}
              >
                {creature.name}
              </h2>
              <p className="text-sm italic" style={{ color: creature.glow }}>
                {creature.latin}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.2rem',
              }}
            >
              ×
            </button>
          </div>

          <div className="flex gap-4 mb-6">
            <div
              className="px-4 py-2 rounded-full text-xs tracking-widest uppercase"
              style={{
                background: `${creature.glow}15`,
                border: `1px solid ${creature.glow}40`,
                color: creature.glow,
                fontFamily: 'Cinzel, serif',
              }}
            >
              {creature.rarity}
            </div>
            <div
              className="px-4 py-2 rounded-full text-xs tracking-widest uppercase"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Cinzel, serif',
              }}
            >
              {creature.depth}
            </div>
          </div>

          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {creature.fact}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LuminousLife() {
  const containerRef = useRef(null);
  const [selectedCreature, setSelectedCreature] = useState(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen"
      style={{ background: '#000005' }}
    >
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #000030 0%, #000005 70%)' }}
      >
        {/* Ambient bioluminescent particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#00FFFF', '#4488FF', '#FF44FF', '#00FF88', '#FF2200'][i % 5],
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

        <div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.3s',
          }}
        >
          <p
            className="text-sm tracking-[0.4em] uppercase mb-6"
            style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF', opacity: 0.7 }}
          >
            Zone III
          </p>
          <h1
            id="lumi-page-title"
            className="text-6xl md:text-8xl font-black tracking-widest mb-6"
            style={{
              fontFamily: 'Cinzel, serif',
              color: '#ffffff',
              textShadow: '0 0 40px rgba(0,255,255,0.5), 0 0 80px rgba(0,255,255,0.2)',
            }}
          >
            Luminous Life
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            In the eternal darkness of the deep, life creates its own light.
            Move your cursor to illuminate the hidden world below.
          </p>

          {/* Instruction card */}
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full"
            style={{
              background: 'rgba(0,255,255,0.05)',
              border: '1px solid rgba(0,255,255,0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ background: '#00FFFF', boxShadow: '0 0 10px #00FFFF' }}
            />
            <span
              className="text-sm tracking-widest"
              style={{ fontFamily: 'Cinzel, serif', color: 'rgba(0,255,255,0.8)' }}
            >
              Hover over each creature to reveal it
            </span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.4em] uppercase mb-4"
            style={{ fontFamily: 'Cinzel, serif', color: '#00FFFF', opacity: 0.6 }}
          >
            Bioluminescent Species
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-widest"
            style={{ fontFamily: 'Cinzel, serif', color: '#ffffff' }}
          >
            Creatures of Light
          </h2>
          <p
            className="text-base mt-4 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            76% of deep-sea creatures produce their own light. Hover to shine your torch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CREATURES.map((creature, i) => (
            <CreatureCard
              key={creature.id}
              creature={creature}
              index={i}
              onSelect={setSelectedCreature}
            />
          ))}
        </div>
      </section>

      {/* Fact strip */}
      <section
        className="px-6 py-16"
        style={{ background: 'rgba(0,0,30,0.6)', borderTop: '1px solid rgba(0,255,255,0.1)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: '76%', label: 'of deep-sea species are bioluminescent', glow: '#00FFFF' },
            { value: '1,000m+', label: 'below the surface where sunlight vanishes', glow: '#4488FF' },
            { value: '500M yrs', label: 'bioluminescence has existed on Earth', glow: '#FF44FF' },
          ].map(({ value, label, glow }) => (
            <div key={value} className="flex flex-col items-center gap-3">
              <div
                className="text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: glow,
                  textShadow: `0 0 20px ${glow}60`,
                }}
              >
                {value}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedCreature && (
        <CreatureModal
          creature={selectedCreature}
          onClose={() => setSelectedCreature(null)}
        />
      )}
    </div>
  );
}
