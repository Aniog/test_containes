import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Zap } from 'lucide-react';
import PixelMatrix from './PixelMatrix';

const STATS = [
  { label: 'PIXEL DEPTH', value: '32-BIT', color: '#00FFFF' },
  { label: 'LED NODES', value: '880', color: '#FF00FF' },
  { label: 'REFRESH', value: '144Hz', color: '#00FF41' },
  { label: 'LATENCY', value: '<1ms', color: '#FFB300' },
];

const FEATURES = [
  {
    icon: Cpu,
    title: 'PIXEL ENGINE',
    desc: 'Every element rendered as individual LED nodes on an 8px grid system.',
    color: '#00FFFF',
  },
  {
    icon: Layers,
    title: 'DEPTH MATRIX',
    desc: 'Multi-layer parallax creates true 3D depth in a 2D pixel space.',
    color: '#FF00FF',
  },
  {
    icon: Zap,
    title: 'REACTIVE LIGHT',
    desc: 'Real-time mouse tracking drives dynamic illumination across the grid.',
    color: '#00FF41',
  },
];

export default function MatrixHero() {
  const navigate = useNavigate();

  return (
    <section className="bg-black">
      {/* Hero canvas */}
      <div
        className="relative w-full bg-pixel-grid"
        style={{ height: 'calc(100vh - 64px)', minHeight: '500px' }}
      >
        <PixelMatrix />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4">
          <div
            className="text-center p-8 md:p-12"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(0,255,255,0.3)',
              boxShadow: '0 0 40px rgba(0,255,255,0.1)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <div
              className="font-pixel text-neon-cyan text-glow-cyan mb-2"
              style={{ fontSize: '10px', letterSpacing: '0.3em' }}
            >
              SYSTEM INITIALIZED
            </div>
            <h1
              className="font-pixel text-white mb-4 leading-tight"
              style={{
                fontSize: 'clamp(18px, 4vw, 40px)',
                textShadow: '0 0 20px #00FFFF, 0 0 60px rgba(0,255,255,0.3)',
                letterSpacing: '0.05em',
              }}
            >
              LUMEN<span style={{ color: '#FF00FF', textShadow: '0 0 20px #FF00FF' }}>PIXEL</span>
            </h1>
            <p
              className="font-mono-tech text-neon-cyan/80 mb-8 max-w-md mx-auto"
              style={{ fontSize: '14px', lineHeight: '1.8' }}
            >
              HIGH-DEFINITION PIXEL ART STUDIO.<br />
              MOVE YOUR CURSOR TO ILLUMINATE THE MATRIX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
              <button
                className="led-btn"
                onClick={() => navigate('/gallery')}
              >
                ENTER GALLERY <ArrowRight size={12} className="inline ml-2" />
              </button>
              <button
                className="led-btn led-btn-magenta"
                onClick={() => navigate('/library')}
              >
                BIT-LIBRARY
              </button>
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: '2px solid #00FFFF', borderLeft: '2px solid #00FFFF', boxShadow: '0 0 8px #00FFFF' }} />
        <div className="absolute top-4 right-4 w-8 h-8" style={{ borderTop: '2px solid #00FFFF', borderRight: '2px solid #00FFFF', boxShadow: '0 0 8px #00FFFF' }} />
        <div className="absolute bottom-4 left-4 w-8 h-8" style={{ borderBottom: '2px solid #00FFFF', borderLeft: '2px solid #00FFFF', boxShadow: '0 0 8px #00FFFF' }} />
        <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: '2px solid #00FFFF', borderRight: '2px solid #00FFFF', boxShadow: '0 0 8px #00FFFF' }} />

        {/* Scan line animation */}
        <div
          className="absolute left-0 right-0 h-px pointer-events-none animate-scan"
          style={{ background: 'linear-gradient(90deg, transparent, #00FFFF, transparent)', opacity: 0.4 }}
        />
      </div>

      {/* Stats bar */}
      <div
        className="bg-black"
        style={{ borderBottom: '1px solid rgba(0,255,255,0.2)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="py-4 px-6 text-center"
                style={{
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(0,255,255,0.1)' : 'none',
                }}
              >
                <div
                  className="font-pixel mb-1"
                  style={{ fontSize: '16px', color: stat.color, textShadow: `0 0 10px ${stat.color}` }}
                >
                  {stat.value}
                </div>
                <div className="font-mono-tech text-neon-cyan/50" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-16">
          <div
            className="font-pixel text-neon-magenta text-glow-magenta mb-4"
            style={{ fontSize: '9px', letterSpacing: '0.3em' }}
          >
            CORE SYSTEMS
          </div>
          <h2
            className="font-pixel text-white"
            style={{ fontSize: 'clamp(14px, 2.5vw, 24px)', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          >
            THE ARCHITECTURE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="led-card p-8 group"
                style={{ borderColor: feat.color, boxShadow: `0 0 8px ${feat.color}30` }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-6"
                  style={{ border: `1px solid ${feat.color}`, boxShadow: `0 0 12px ${feat.color}` }}
                >
                  <Icon size={20} color={feat.color} />
                </div>
                <h3
                  className="font-pixel mb-4"
                  style={{ fontSize: '10px', color: feat.color, textShadow: `0 0 8px ${feat.color}`, letterSpacing: '0.1em' }}
                >
                  {feat.title}
                </h3>
                <p className="font-mono-tech text-neon-cyan/70 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA section */}
      <div
        className="bg-pixel-grid py-20"
        style={{ borderTop: '1px solid rgba(0,255,255,0.15)', borderBottom: '1px solid rgba(0,255,255,0.15)' }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="font-pixel text-neon-cyan text-glow-cyan mb-6"
            style={{ fontSize: 'clamp(12px, 2vw, 20px)', letterSpacing: '0.1em' }}
          >
            EXPLORE THE COLLECTION
          </h2>
          <p className="font-mono-tech text-neon-cyan/70 mb-8 text-sm leading-relaxed">
            Macro photography of vintage LED displays, fiber optic arrays, and neon installations.
            Each image captured at the pixel level.
          </p>
          <button className="led-btn" onClick={() => navigate('/gallery')}>
            OPEN LIGHT GALLERY <ArrowRight size={12} className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
