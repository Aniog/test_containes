import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import StatusBar from './components/visionos/StatusBar';
import AppGrid from './components/visionos/AppGrid';
import Dock from './components/visionos/Dock';
import ControlCenter from './components/visionos/ControlCenter';

const Toast = ({ message, onDismiss }) => (
  <div
    className="fixed top-16 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3 rounded-2xl"
    style={{
      background: 'rgba(30,30,40,0.75)',
      backdropFilter: 'blur(40px)',
      border: '1px solid rgba(255,255,255,0.15)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      animation: 'fadeSlideIn 0.3s ease',
    }}
  >
    <span className="text-white/90 text-sm font-medium">{message}</span>
    <button onClick={onDismiss} className="text-white/40 hover:text-white/80 transition-colors">
      <X className="w-3.5 h-3.5" />
    </button>
  </div>
);

function App() {
  const [showCC, setShowCC] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const handleAppOpen = (name) => showToast(`Opening ${name}…`);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Spatial background ── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, #1a0533 0%, #0a0a1a 40%, #000510 100%)',
        }}
      />

      {/* Star field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 0.5 + 'px',
              height: Math.random() * 2 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + 's',
            }}
          />
        ))}
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #2563eb, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #ec4899, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      {/* ── Status Bar ── */}
      <StatusBar />

      {/* ── Control Center toggle button ── */}
      <button
        onClick={() => setShowCC(!showCC)}
        className="fixed top-3 right-6 z-50 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 pointer-events-auto"
        style={{
          background: showCC ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <SlidersHorizontal className="w-4 h-4 text-white/80" />
      </button>

      {/* ── Control Center panel ── */}
      {showCC && <ControlCenter onClose={() => setShowCC(false)} />}

      {/* ── Main floating window ── */}
      <div className="absolute inset-0 flex items-center justify-center pt-12 pb-28">
        <div
          className="relative w-full max-w-3xl mx-8 rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(60px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8">
            <div className="w-3 h-3 rounded-full bg-red-400/80 cursor-pointer hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80 cursor-pointer hover:bg-yellow-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-400/80 cursor-pointer hover:bg-green-400 transition-colors" />
            <span className="ml-3 text-white/40 text-xs font-medium tracking-wide">Home</span>
          </div>

          {/* App grid */}
          <div className="p-8">
            <AppGrid onAppOpen={handleAppOpen} />
          </div>
        </div>
      </div>

      {/* ── Dock ── */}
      <Dock onAppOpen={handleAppOpen} />

      {/* ── Toast ── */}
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </div>
  );
}

export default App;
