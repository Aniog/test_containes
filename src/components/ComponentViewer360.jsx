import { useState, useRef, useCallback, useEffect } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const TOTAL_FRAMES = 36;

// SVG frames simulating a rotating metallic CPU/component
function ComponentFrame({ angle }) {
  const rad = (angle * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);

  // Perspective-like scaling
  const scaleX = 0.85 + 0.15 * Math.abs(cos);
  const skewY = sin * 8;

  // Highlight position based on angle
  const highlightX = 50 + cos * 30;
  const highlightY = 50 + sin * 10;

  // Visible faces
  const showRight = cos > 0;
  const showLeft = cos < 0;
  const faceOpacity = Math.abs(cos);

  return (
    <svg viewBox="0 0 300 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 30px rgba(192,192,192,0.15))' }}>
      <defs>
        <radialGradient id={`glow-${angle}`} cx={`${highlightX}%`} cy={`${highlightY}%`} r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1A1A1B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`top-face-${angle}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cos > 0 ? '#d0d0d0' : '#888'} />
          <stop offset="50%" stopColor={cos > 0 ? '#b0b0b0' : '#666'} />
          <stop offset="100%" stopColor={cos > 0 ? '#909090' : '#444'} />
        </linearGradient>
        <linearGradient id={`side-face-${angle}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={showRight ? '#a0a0a0' : '#505050'} />
          <stop offset="100%" stopColor={showRight ? '#707070' : '#303030'} />
        </linearGradient>
        <filter id="metallic-blur">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Base platform */}
      <ellipse
        cx="150" cy="240"
        rx={80 * scaleX} ry="12"
        fill="rgba(0,0,0,0.4)"
        style={{ transform: `skewY(${skewY * 0.3}deg)`, transformOrigin: '150px 240px' }}
      />

      {/* Main body - bottom face */}
      <g style={{ transform: `scaleX(${scaleX}) skewY(${skewY}deg)`, transformOrigin: '150px 150px' }}>
        {/* Bottom face */}
        <rect x="80" y="190" width="140" height="20" rx="2" fill="#2a2a2a" />

        {/* Side face */}
        {showRight && (
          <polygon
            points={`220,80 240,95 240,210 220,210`}
            fill={`url(#side-face-${angle})`}
            opacity={faceOpacity}
          />
        )}
        {showLeft && (
          <polygon
            points={`80,80 60,95 60,210 80,210`}
            fill={`url(#side-face-${angle})`}
            opacity={faceOpacity}
          />
        )}

        {/* Main top face */}
        <rect x="80" y="80" width="140" height="130" rx="4" fill={`url(#top-face-${angle})`} />

        {/* Circuit traces */}
        <g stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="none">
          <line x1="100" y1="100" x2="200" y2="100" />
          <line x1="100" y1="120" x2="160" y2="120" />
          <line x1="100" y1="140" x2="200" y2="140" />
          <line x1="100" y1="160" x2="140" y2="160" />
          <line x1="100" y1="180" x2="200" y2="180" />
          <line x1="120" y1="100" x2="120" y2="190" />
          <line x1="160" y1="100" x2="160" y2="190" />
          <line x1="180" y1="100" x2="180" y2="190" />
        </g>

        {/* Center die */}
        <rect x="115" y="115" width="70" height="70" rx="3" fill="#1a1a1a" />
        <rect x="120" y="120" width="60" height="60" rx="2"
          fill={`rgba(${cos > 0 ? '180,180,180' : '100,100,100'},0.9)`}
        />
        {/* Die markings */}
        <text x="150" y="155" textAnchor="middle" fontSize="10" fontFamily="monospace"
          fill={cos > 0 ? '#1a1a1a' : '#888'} fontWeight="bold">
          TC-X9
        </text>
        <rect x="125" y="125" width="50" height="8" rx="1" fill="rgba(0,0,0,0.2)" />

        {/* Pin array */}
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <rect x={85 + i * 22} y="195" width="6" height="10" rx="1"
              fill={cos > 0 ? '#888' : '#444'} />
            <rect x={85 + i * 22} y="70" width="6" height="10" rx="1"
              fill={cos > 0 ? '#888' : '#444'} />
          </g>
        ))}
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <rect x="70" y={90 + i * 24} width="10" height="6" rx="1"
              fill={cos > 0 ? '#888' : '#444'} />
            <rect x="220" y={90 + i * 24} width="10" height="6" rx="1"
              fill={cos > 0 ? '#888' : '#444'} />
          </g>
        ))}

        {/* Highlight overlay */}
        <rect x="80" y="80" width="140" height="130" rx="4"
          fill={`url(#glow-${angle})`} />
      </g>
    </svg>
  );
}

export default function ComponentViewer360() {
  const [frame, setFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const autoRef = useRef(null);
  const containerRef = useRef(null);

  const angle = (frame / TOTAL_FRAMES) * 360;

  const startAutoRotate = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setFrame(f => (f + 1) % TOTAL_FRAMES);
    }, 80);
  }, []);

  const stopAutoRotate = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  useEffect(() => {
    if (autoRotate) startAutoRotate();
    else stopAutoRotate();
    return stopAutoRotate;
  }, [autoRotate, startAutoRotate, stopAutoRotate]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setDragStart({ x: e.clientX, frame });
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || dragStart === null) return;
    const delta = e.clientX - dragStart.x;
    const newFrame = ((dragStart.frame + Math.round(delta / 6)) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES;
    setFrame(newFrame);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const step = (dir) => {
    setAutoRotate(false);
    setFrame(f => ((f + dir) % TOTAL_FRAMES + TOTAL_FRAMES) % TOTAL_FRAMES);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Viewer */}
      <div
        ref={containerRef}
        className="relative w-72 h-72 md:w-80 md:h-80 cursor-grab active:cursor-grabbing select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 rounded-full bg-[#C0C0C0]/5 blur-3xl" />

        {/* Component */}
        <ComponentFrame angle={angle} />

        {/* Drag hint */}
        {!isDragging && autoRotate && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 glass-panel px-3 py-1.5 pointer-events-none">
            <span className="font-orbitron text-[10px] tracking-widest text-[#C0C0C0]/60 uppercase">
              Drag to rotate
            </span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => step(-1)}
          className="w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/20 rounded hover:border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/5 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-[#C0C0C0]/60" />
        </button>

        <button
          onClick={() => setAutoRotate(r => !r)}
          className={`flex items-center gap-2 px-4 py-1.5 border rounded font-orbitron text-[10px] tracking-widest uppercase transition-all ${
            autoRotate
              ? 'border-[#C0C0C0]/50 text-[#C0C0C0] bg-[#C0C0C0]/5'
              : 'border-[#C0C0C0]/20 text-[#C0C0C0]/40 hover:border-[#C0C0C0]/40'
          }`}
        >
          <RotateCcw className={`w-3 h-3 ${autoRotate ? 'animate-spin-slow' : ''}`} />
          {autoRotate ? 'Auto' : 'Manual'}
        </button>

        <button
          onClick={() => step(1)}
          className="w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/20 rounded hover:border-[#C0C0C0]/50 hover:bg-[#C0C0C0]/5 transition-all"
        >
          <ChevronRight className="w-4 h-4 text-[#C0C0C0]/60" />
        </button>
      </div>

      {/* Angle readout */}
      <div className="font-orbitron text-xs tracking-widest text-[#C0C0C0]/30">
        {Math.round(angle)}° / 360°
      </div>
    </div>
  );
}
