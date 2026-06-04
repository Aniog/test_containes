import { useEffect, useRef, useState, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const creatures = [
  {
    id: 'anglerfish',
    titleId: 'lum-title-anglerfish',
    descId: 'lum-desc-anglerfish',
    imgId: 'lum-img-anglerfish-a1b2c3',
    title: 'Anglerfish',
    desc: 'The anglerfish dangles a bioluminescent lure to attract prey in the pitch-black abyss. Its light is produced by symbiotic bacteria.',
    glowColor: '#00FFAA',
    depth: '1,000–4,000m',
    fact: 'The lure can be 10× brighter than a firefly',
  },
  {
    id: 'firefly-squid',
    titleId: 'lum-title-firefly-squid',
    descId: 'lum-desc-firefly-squid',
    imgId: 'lum-img-firefly-squid-d4e5f6',
    title: 'Firefly Squid',
    desc: 'Thousands of photophores cover the firefly squid\'s body, creating dazzling light shows used for communication and camouflage.',
    glowColor: '#4488FF',
    depth: '200–600m',
    fact: 'Can produce blue, green, and white light simultaneously',
  },
  {
    id: 'comb-jelly',
    titleId: 'lum-title-comb-jelly',
    descId: 'lum-desc-comb-jelly',
    imgId: 'lum-img-comb-jelly-g7h8i9',
    title: 'Comb Jelly',
    desc: 'Comb jellies refract light through their cilia, creating rainbow iridescence. When disturbed, they flash brilliant blue-green bioluminescence.',
    glowColor: '#FF00FF',
    depth: '0–3,000m',
    fact: 'One of the oldest animal lineages on Earth',
  },
  {
    id: 'dragonfish',
    titleId: 'lum-title-dragonfish',
    descId: 'lum-desc-dragonfish',
    imgId: 'lum-img-dragonfish-j1k2l3',
    title: 'Black Dragonfish',
    desc: 'The black dragonfish emits red bioluminescence — a rare ability. Most deep-sea creatures cannot see red light, making it an invisible predator.',
    glowColor: '#FF2200',
    depth: '200–1,000m',
    fact: 'Uses red light as a secret weapon — invisible to prey',
  },
  {
    id: 'sea-sparkle',
    titleId: 'lum-title-sea-sparkle',
    descId: 'lum-desc-sea-sparkle',
    imgId: 'lum-img-sea-sparkle-m4n5o6',
    title: 'Sea Sparkle',
    desc: 'Noctiluca scintillans creates the magical "blue tide" phenomenon — entire bays glowing electric blue when waves disturb these single-celled organisms.',
    glowColor: '#00CCFF',
    depth: 'Surface',
    fact: 'Creates the famous glowing beaches of the Maldives',
  },
  {
    id: 'vampire-squid',
    titleId: 'lum-title-vampire-squid',
    descId: 'lum-desc-vampire-squid',
    imgId: 'lum-img-vampire-squid-p7q8r9',
    title: 'Vampire Squid',
    desc: 'Despite its name, the vampire squid is harmless. It can turn its entire body inside out and produces bioluminescent mucus clouds to confuse predators.',
    glowColor: '#AA44FF',
    depth: '600–900m',
    fact: 'Neither a true squid nor an octopus — its own order',
  },
];

const FlashlightCanvas = ({ mousePos, isActive }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mousePosRef = useRef(mousePos);
  const isActiveRef = useRef(isActive);

  useEffect(() => { mousePosRef.current = mousePos; }, [mousePos]);
  useEffect(() => { isActiveRef.current = isActive; }, [isActive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      if (!isActiveRef.current) {
        // Full dark overlay
        ctx.fillStyle = 'rgba(0, 2, 10, 0.97)';
        ctx.fillRect(0, 0, width, height);
      } else {
        const { x, y } = mousePosRef.current;
        const radius = 140;

        // Dark overlay
        ctx.fillStyle = 'rgba(0, 2, 10, 0.97)';
        ctx.fillRect(0, 0, width, height);

        // Cut out the flashlight circle
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, 'rgba(0, 2, 10, 0)');
        gradient.addColorStop(0.6, 'rgba(0, 2, 10, 0)');
        gradient.addColorStop(1, 'rgba(0, 2, 10, 0.97)');

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        // Subtle cyan rim glow
        const rimGradient = ctx.createRadialGradient(x, y, radius * 0.85, x, y, radius * 1.1);
        rimGradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        rimGradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.06)');
        rimGradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
        ctx.beginPath();
        ctx.arc(x, y, radius * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = rimGradient;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
        borderRadius: 'inherit',
      }}
    />
  );
};

const CreatureCard = ({ creature }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-3xl cursor-crosshair"
      style={{
        aspectRatio: '4/3',
        background: '#000208',
        boxShadow: isHovering
          ? `0 0 40px ${creature.glowColor}33, 0 0 80px ${creature.glowColor}11`
          : '0 4px 20px rgba(0,0,0,0.8)',
        transition: 'box-shadow 0.4s ease',
        border: `1px solid ${creature.glowColor}22`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Creature image — always rendered, revealed by flashlight */}
      <img
        data-strk-img-id={creature.imgId}
        data-strk-img={`[${creature.descId}] [${creature.titleId}] bioluminescent deep sea creature dark ocean`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={creature.title}
        className="w-full h-full object-cover"
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Bioluminescent glow overlay (always visible, subtle) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${creature.glowColor}08 0%, transparent 70%)`,
          zIndex: 1,
          transition: 'opacity 0.5s ease',
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* Flashlight darkness overlay */}
      <FlashlightCanvas mousePos={mousePos} isActive={isHovering} />

      {/* Info overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 p-4 z-10"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
          transform: isHovering ? 'translateY(0)' : 'translateY(8px)',
          opacity: isHovering ? 1 : 0.6,
          transition: 'all 0.4s ease',
        }}
      >
        <div className="text-xs font-cinzel tracking-widest mb-1" style={{ color: creature.glowColor }}>
          {creature.depth}
        </div>
        <h3 className="font-cinzel font-bold text-white text-lg">{creature.title}</h3>
        {isHovering && (
          <p className="text-xs text-white/65 mt-1 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            {creature.fact}
          </p>
        )}
      </div>

      {/* Hidden text for image queries */}
      <span id={creature.titleId} className="sr-only">{creature.title}</span>
      <span id={creature.descId} className="sr-only">{creature.desc}</span>

      {/* "Shine light" hint when not hovering */}
      {!isHovering && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="text-center px-4 py-2 rounded-full"
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: `1px solid ${creature.glowColor}33`,
            }}
          >
            <div className="text-xs font-cinzel tracking-widest" style={{ color: `${creature.glowColor}99` }}>
              HOVER TO ILLUMINATE
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LuminousLife = () => {
  const containerRef = useRef(null);
  const [selectedCreature, setSelectedCreature] = useState(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        background: 'linear-gradient(180deg, #000208 0%, #000510 50%, #000033 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Ambient glow orbs */}
        {['#00FFAA', '#4488FF', '#FF00FF', '#AA44FF'].map((color, i) => (
          <div
            key={color}
            className="absolute rounded-full opacity-10 animate-float"
            style={{
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              background: `radial-gradient(circle, ${color}, transparent)`,
              filter: 'blur(30px)',
              top: `${20 + i * 15}%`,
              left: `${10 + i * 22}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        <div className="relative z-10">
          <p className="text-xs font-cinzel tracking-[0.4em] mb-4" style={{ color: '#00FFAA' }}>
            THE DARK ROOM
          </p>
          <h1
            className="font-cinzel font-black mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #ffffff 0%, #00FFAA 40%, #4488FF 80%, #AA44FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Luminous Life
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter, sans-serif' }}
          >
            In the eternal darkness of the deep ocean, life creates its own light. Move your cursor over each creature to shine a light into the abyss.
          </p>

          {/* Glow stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { value: '76%', label: 'of deep-sea creatures', color: '#00FFAA' },
              { value: '1,000+', label: 'bioluminescent species', color: '#4488FF' },
              { value: '500m+', label: 'depth of darkness', color: '#AA44FF' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-3 rounded-2xl text-center"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  border: `1px solid ${stat.color}33`,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="font-cinzel font-bold text-xl" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-cinzel tracking-widest mb-2" style={{ color: 'rgba(0,255,170,0.6)' }}>
            MOVE YOUR CURSOR TO REVEAL
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,170,0.4))' }} />
            <div className="w-2 h-2 rounded-full animate-pulse-glow" style={{ background: '#00FFAA' }} />
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, rgba(0,255,170,0.4), transparent)' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatures.map((creature) => (
            <CreatureCard key={creature.id} creature={creature} />
          ))}
        </div>
      </div>

      {/* Detail panel — click to expand */}
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: 'rgba(0, 5, 20, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0,255,170,0.15)',
          }}
        >
          <p className="text-xs font-cinzel tracking-widest mb-4" style={{ color: '#00FFAA' }}>THE SCIENCE OF LIGHT</p>
          <h2 className="font-cinzel font-bold text-3xl text-white mb-6">How Bioluminescence Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '⚗️',
                title: 'Luciferin',
                desc: 'A light-emitting compound that reacts with oxygen to produce light without heat.',
                color: '#00FFAA',
              },
              {
                icon: '🔬',
                title: 'Luciferase',
                desc: 'The enzyme that catalyzes the reaction, controlling when and how brightly the creature glows.',
                color: '#4488FF',
              },
              {
                icon: '✨',
                title: 'Cold Light',
                desc: 'Unlike fire, bioluminescence produces almost no heat — 98% of the energy becomes visible light.',
                color: '#AA44FF',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5"
                style={{
                  background: `rgba(0,0,0,0.4)`,
                  border: `1px solid ${item.color}22`,
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-cinzel font-bold text-lg mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuminousLife;
