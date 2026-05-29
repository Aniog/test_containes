import { useEffect, useRef } from 'react';

const PARTICLES = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 4 + 2,
}));

const CLOUDS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  y: Math.random() * 60 + 10,
  size: Math.random() * 200 + 100,
  opacity: Math.random() * 0.15 + 0.05,
  duration: Math.random() * 30 + 20,
  delay: Math.random() * -20,
}));

const ORBS = [
  { x: 15, y: 20, size: 300, color: '#c084fc', opacity: 0.12, delay: 0 },
  { x: 75, y: 60, size: 400, color: '#818cf8', opacity: 0.10, delay: 2 },
  { x: 45, y: 80, size: 250, color: '#f472b6', opacity: 0.08, delay: 4 },
  { x: 85, y: 15, size: 200, color: '#2dd4bf', opacity: 0.07, delay: 1 },
];

export default function DreamBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0820] to-[#050510]" />

      {/* Animated orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-pulse-glow"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: orb.opacity,
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}

      {/* Stars */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Drifting clouds */}
      {CLOUDS.map(cloud => (
        <div
          key={cloud.id}
          className="absolute rounded-full"
          style={{
            top: `${cloud.y}%`,
            width: cloud.size,
            height: cloud.size / 2,
            background: 'radial-gradient(ellipse, rgba(192,132,252,0.3) 0%, transparent 70%)',
            opacity: cloud.opacity,
            filter: 'blur(30px)',
            animation: `drift ${cloud.duration}s linear infinite`,
            animationDelay: `${cloud.delay}s`,
          }}
        />
      ))}

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(192,132,252,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(192,132,252,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
}
