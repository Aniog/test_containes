import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

/* ── Animated background blobs ── */
const BLOBS = [
  { cls: 'blob-a', style: { top: '8%',  left: '4%',   width: 480, height: 480, background: 'radial-gradient(circle, rgba(124,58,237,0.55) 0%, rgba(109,40,217,0.2) 55%, transparent 70%)', filter: 'blur(72px)', opacity: 0.45 } },
  { cls: 'blob-b', style: { top: '45%', right: '5%',  width: 420, height: 420, background: 'radial-gradient(circle, rgba(236,72,153,0.55) 0%, rgba(190,24,93,0.2) 55%, transparent 70%)',  filter: 'blur(80px)', opacity: 0.38 } },
  { cls: 'blob-c', style: { bottom: '12%', left: '32%', width: 360, height: 360, background: 'radial-gradient(circle, rgba(56,189,248,0.45) 0%, rgba(14,165,233,0.18) 55%, transparent 70%)', filter: 'blur(90px)', opacity: 0.32 } },
  { cls: 'blob-a', style: { top: '68%', left: '8%',   width: 300, height: 300, background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(5,150,105,0.15) 55%, transparent 70%)',  filter: 'blur(64px)', opacity: 0.28, animationDelay: '-5s' } },
  { cls: 'blob-b', style: { top: '18%', right: '28%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(245,158,11,0.4) 0%, rgba(217,119,6,0.15) 55%, transparent 70%)',  filter: 'blur(56px)', opacity: 0.25, animationDelay: '-9s' } },
];

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#07001a' }}>

      {/* Background layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Deep radial base */}
        <div className="absolute inset-0" style={{
          background: [
            'radial-gradient(ellipse 70% 60% at 15% 45%, rgba(109,40,217,0.22) 0%, transparent 100%)',
            'radial-gradient(ellipse 60% 55% at 85% 20%, rgba(190,24,93,0.18) 0%, transparent 100%)',
            'radial-gradient(ellipse 55% 50% at 55% 85%, rgba(14,165,233,0.16) 0%, transparent 100%)',
          ].join(', '),
        }} />

        {/* Animated blobs */}
        {BLOBS.map((b, i) => (
          <div key={i} className={`absolute rounded-full ${b.cls}`} style={{ ...b.style, position: 'absolute' }} />
        ))}

        {/* Subtle grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      {/* App */}
      <div className="relative z-10">
        <Navbar active={active} setActive={setActive} />
        <Social />
      </div>
    </div>
  );
}
