import { useState, useRef, useEffect, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CREATURES = [
  {
    id: 'jellyfish',
    name: 'Atolla Jellyfish',
    latin: 'Atolla wyvillei',
    depth: '500 — 4,500m',
    desc: 'The "alarm jellyfish" — when attacked, it emits a brilliant rotating pinwheel of blue light to attract larger predators to its attacker.',
    imgId: 'luminous-jellyfish-m1n2o3',
    glowColor: '#00ccff',
  },
  {
    id: 'anglerfish',
    name: 'Anglerfish',
    latin: 'Melanocetus johnsonii',
    depth: '300 — 2,000m',
    desc: 'Its bioluminescent lure, a modified dorsal spine, dangles above needle-sharp teeth. The glowing bait attracts prey in total darkness.',
    imgId: 'luminous-anglerfish-p4q5r6',
    glowColor: '#00ff88',
  },
  {
    id: 'comb-jelly',
    name: 'Comb Jelly',
    latin: 'Beroe forskalii',
    depth: '0 — 3,000m',
    desc: 'Rows of cilia diffract light into shimmering rainbow waves. Unlike true jellyfish, these hunters use sticky cells instead of stingers.',
    imgId: 'luminous-combjelly-s7t8u9',
    glowColor: '#ff88ff',
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    latin: 'Vampyroteuthis infernalis',
    depth: '600 — 2,500m',
    desc: 'Neither squid nor octopus — it lives in the oxygen minimum zone. When threatened, it inverts its webbed arms into a defensive cape.',
    imgId: 'luminous-vampire-v0w1x2',
    glowColor: '#ff4444',
  },
  {
    id: 'firefly-squid',
    name: 'Firefly Squid',
    latin: 'Watasenia scintillans',
    depth: '200 — 400m',
    desc: 'Tiny photophores cover its body, each producing blue light. Every spring, millions rise to the surface of Toyama Bay in a dazzling display.',
    imgId: 'luminous-firefly-y3z4a5',
    glowColor: '#4488ff',
  },
  {
    id: 'dragonfish',
    name: 'Black Dragonfish',
    latin: 'Idiacanthus atlanticus',
    depth: '500 — 2,000m',
    desc: 'It produces red bioluminescence — invisible to most deep-sea creatures. A built-in night-vision sniper scope in the darkness.',
    imgId: 'luminous-dragon-b6c7d8',
    glowColor: '#ff6644',
  },
];

export default function LuminousLife() {
  const containerRef = useRef(null);
  const glowContainerRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCreature, setActiveCreature] = useState(null);
  const rafRef = useRef(null);
  const targetPos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleMouseMove = useCallback((e) => {
    targetPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches.length > 0) {
      targetPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, []);

  useEffect(() => {
    const animate = () => {
      setCursorPos((prev) => ({
        x: prev.x + (targetPos.current.x - prev.x) * 0.12,
        y: prev.y + (targetPos.current.y - prev.y) * 0.12,
      }));
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const el = glowContainerRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden"
      style={{ cursor: isTouchDevice ? 'auto' : 'none' }}
    >
      {/* The dark overlay */}
      <div
        ref={glowContainerRef}
        className="fixed inset-0 z-20 pointer-events-auto"
      >
        {/* Radial flashlight mask */}
        <div
          className="absolute inset-0 transition-[mask-image] duration-75"
          style={{
            backgroundColor: '#000010',
            maskImage: `radial-gradient(circle 200px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, rgba(0,0,0,0.3) 60%, black 100%)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${cursorPos.x}px ${cursorPos.y}px, transparent 0%, rgba(0,0,0,0.3) 60%, black 100%)`,
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <p className="text-cyan/30 text-sm tracking-[0.3em] mb-4 animate-pulse-glow">
          MOVE YOUR CURSOR
        </p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          LUMINOUS LIFE
        </h1>
        <p className="text-white/30 max-w-md text-base md:text-lg leading-relaxed">
          A dark room gallery. The creatures lurk in shadow — move your cursor
          across the screen to shine a light and reveal their bioluminescence.
        </p>
        {isTouchDevice && (
          <p className="text-cyan/40 text-sm mt-4">
            Touch and drag to explore
          </p>
        )}
      </section>

      {/* Creature Grid */}
      <section className="relative z-10 px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CREATURES.map((creature) => {
            const isActive = activeCreature === creature.id;
            return (
              <div
                key={creature.id}
                className={`relative rounded-bubble-xl overflow-hidden transition-all duration-500 group ${
                  isActive ? 'ring-2 ring-cyan/60 scale-[1.02]' : 'ring-1 ring-white/5'
                }`}
                onMouseEnter={() => setActiveCreature(creature.id)}
                onMouseLeave={() => setActiveCreature(null)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-abyss-900">
                  <img
                    alt={creature.name}
                    data-strk-img-id={creature.imgId}
                    data-strk-img={`[luminous-${creature.id}-desc] [luminous-${creature.id}-name]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                  {/* Bioluminescent glow overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 opacity-40 group-hover:opacity-80"
                    style={{
                      background: `radial-gradient(ellipse at center, ${creature.glowColor}33 0%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Info panel */}
                <div className="p-5 bg-black/80 backdrop-blur-sm">
                  <h3
                    id={`luminous-${creature.id}-name`}
                    className="text-lg font-bold text-white mb-1"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                  >
                    {creature.name}
                  </h3>
                  <p className="text-xs text-cyan/40 italic mb-2">{creature.latin}</p>
                  <p
                    id={`luminous-${creature.id}-desc`}
                    className="text-sm text-white/40 leading-relaxed line-clamp-3"
                  >
                    {creature.desc}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse-glow"
                      style={{ backgroundColor: creature.glowColor }}
                    />
                    <span className="text-xs text-white/20">{creature.depth}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ambient floating glow orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-10"
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: `radial-gradient(circle, ${
                CREATURES[i % CREATURES.length].glowColor
              }, transparent)`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Footer */}
      <section className="relative z-10 min-h-[30vh] flex items-center justify-center text-center px-6 pb-10">
        <div className="max-w-md">
          <p className="text-cyan/20 text-sm tracking-[0.3em] mb-4">
            BIOLUMINESCENCE
          </p>
          <p className="text-white/15 text-sm leading-relaxed">
            Over 75% of deep-sea animals produce their own light. It is the most
            common form of communication on Earth — a language of flashes,
            pulses, and glowing lures in the eternal dark.
          </p>
        </div>
      </section>
    </div>
  );
}