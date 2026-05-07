import { useState } from 'react';
import './index.css';
import Navbar from './components/social/Navbar';
import Social from './pages/Social';

/*
 * Apple Liquid Glass requires an extremely vibrant, saturated background.
 * The glass effect is only visible when there's rich color behind it.
 * We use large, high-opacity blobs with no blur on the blobs themselves —
 * the blur happens at the glass layer via backdrop-filter.
 */
const BLOBS = [
  {
    cls: 'blob-a',
    style: {
      top: '-10%', left: '-8%',
      width: 700, height: 700,
      background: 'radial-gradient(circle at 40% 40%, #7c3aed 0%, #4f46e5 40%, transparent 70%)',
      opacity: 0.75,
    },
  },
  {
    cls: 'blob-b',
    style: {
      top: '30%', right: '-12%',
      width: 620, height: 620,
      background: 'radial-gradient(circle at 60% 50%, #db2777 0%, #e11d48 40%, transparent 70%)',
      opacity: 0.70,
    },
  },
  {
    cls: 'blob-c',
    style: {
      bottom: '-5%', left: '25%',
      width: 580, height: 580,
      background: 'radial-gradient(circle at 50% 60%, #0891b2 0%, #0284c7 40%, transparent 70%)',
      opacity: 0.65,
    },
  },
  {
    cls: 'blob-a',
    style: {
      top: '55%', left: '-5%',
      width: 440, height: 440,
      background: 'radial-gradient(circle at 45% 45%, #059669 0%, #0d9488 40%, transparent 70%)',
      opacity: 0.60,
      animationDelay: '-6s',
    },
  },
  {
    cls: 'blob-b',
    style: {
      top: '10%', right: '20%',
      width: 380, height: 380,
      background: 'radial-gradient(circle at 55% 40%, #d97706 0%, #ea580c 40%, transparent 70%)',
      opacity: 0.55,
      animationDelay: '-11s',
    },
  },
  {
    cls: 'blob-c',
    style: {
      top: '40%', left: '40%',
      width: 320, height: 320,
      background: 'radial-gradient(circle at 50% 50%, #9333ea 0%, #c026d3 40%, transparent 70%)',
      opacity: 0.50,
      animationDelay: '-4s',
    },
  },
];

export default function App() {
  const [active, setActive] = useState('首页');

  return (
    <div className="min-h-screen" style={{ background: '#04000f' }}>

      {/* ── Vibrant background canvas ── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        {/* Base gradient — deep rich purple-black */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 70% at 10% 20%, rgba(109,40,217,0.45) 0%, transparent 60%),
            radial-gradient(ellipse 70% 60% at 90% 15%, rgba(219,39,119,0.40) 0%, transparent 60%),
            radial-gradient(ellipse 65% 55% at 50% 90%, rgba(8,145,178,0.38) 0%, transparent 60%),
            radial-gradient(ellipse 50% 45% at 80% 70%, rgba(5,150,105,0.30) 0%, transparent 60%),
            #04000f
          `,
        }} />

        {/* Animated color blobs — NO blur here, blur is on the glass */}
        {BLOBS.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${b.cls}`}
            style={{ ...b.style, position: 'absolute' }}
          />
        ))}

        {/* Noise texture for depth */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
          mixBlendMode: 'overlay',
        }} />
      </div>

      {/* ── App content ── */}
      <div className="relative z-10">
        <Navbar active={active} setActive={setActive} />
        <Social />
      </div>
    </div>
  );
}
