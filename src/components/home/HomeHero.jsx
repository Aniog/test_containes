import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, Cpu } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const telemetryData = [
  { label: 'Plasma Temp', value: '150,000,000 K', unit: 'Kelvin' },
  { label: 'Magnetic Field', value: '12.4 T', unit: 'Tesla' },
  { label: 'Fusion Power', value: '2.4 GW', unit: 'Gigawatt' },
  { label: 'Q-Factor', value: 'Q > 10', unit: 'Gain Ratio' },
];

export default function HomeHero() {
  const containerRef = useRef(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => (t + 1) % telemetryData.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 min-h-screen flex flex-col">
        {/* Top label bar */}
        <div className="flex items-center justify-between pt-8 pb-6 border-b border-[#1f1f1f]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
              Mission Control — Sector 7
            </span>
            <span className="w-px h-3 bg-[#262626]" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
              FY 2047 — Q3 Operational
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-neutral-600" />
            <span className="font-mono text-[10px] text-neutral-600 tracking-widest">
              LIVE TELEMETRY
            </span>
          </div>
        </div>

        {/* Main split layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-0 py-12 lg:py-0">
          {/* Left: Text Content — 3 cols */}
          <div className="lg:col-span-3 flex flex-col justify-center pr-0 lg:pr-16 py-12 lg:py-24">
            <div className="mb-6">
              <span className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase border border-[#262626] px-3 py-1.5">
                Commercial Fusion — Generation IV
              </span>
            </div>

            <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.95] tracking-tight uppercase mb-8">
              <span className="block">Ignition</span>
              <span className="block text-neutral-400">Dynamics</span>
              <span className="block text-[#262626] text-4xl md:text-5xl lg:text-6xl mt-2">
                The Fusion Era
              </span>
            </h1>

            <p className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-xl mb-10 font-light">
              We engineer the post-carbon civilization. Our magnetic confinement reactors sustain plasma at 150 million Kelvin — ten times hotter than the solar core — delivering net-positive fusion energy to national grids at gigawatt scale.
            </p>

            {/* Telemetry strip */}
            <div className="grid grid-cols-2 gap-px bg-[#1f1f1f] border border-[#262626] mb-10">
              {telemetryData.map(({ label, value, unit }, i) => (
                <div
                  key={label}
                  className={`bg-[#0a0a0a] px-4 py-3 transition-colors duration-500 ${
                    i === tick ? 'bg-[#121212]' : ''
                  }`}
                >
                  <p className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase mb-1">{label}</p>
                  <p className="font-mono text-sm text-white font-medium">{value}</p>
                  <p className="font-mono text-[9px] text-neutral-700 tracking-widest">{unit}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/reactors"
                className="flex items-center justify-center gap-3 border border-white text-white font-mono text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-black transition-all duration-200"
              >
                <Zap className="w-4 h-4" />
                Explore Reactors
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-3 border border-[#262626] text-neutral-400 font-mono text-xs tracking-[0.2em] uppercase px-8 py-4 hover:border-neutral-400 hover:text-white transition-all duration-200"
              >
                Request Grid Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Hero Image — 2 cols */}
          <div className="lg:col-span-2 relative flex items-stretch min-h-[400px] lg:min-h-0">
            <div className="relative w-full border-l border-[#262626] overflow-hidden">
              {/* Image */}
              <div
                id="hero-img-bg"
                className="absolute inset-0"
                data-strk-bg-id="hero-plasma-bg-8f2a9c"
                data-strk-bg="[hero-title-text] glowing plasma tokamak reactor interior fusion energy"
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="800"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              {/* Dark fade on left edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
              {/* Bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              {/* Overlay telemetry badge */}
              <div className="absolute top-6 right-6 bg-[#050505]/80 border border-[#262626] px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase">Live Feed</span>
                </div>
                <p className="font-mono text-[10px] text-neutral-600">DAEDALUS-7 TOKAMAK</p>
                <p className="font-mono text-[10px] text-neutral-600">PLASMA CORE — ACTIVE</p>
              </div>

              {/* Bottom spec overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#050505]/80 border border-[#262626] px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">Confinement Time</p>
                      <p className="font-mono text-sm text-white">τ_E = 3.7 s</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">Fusion Product</p>
                      <p className="font-mono text-sm text-white">nτT ≥ 3×10²¹</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden text for image query reference */}
        <span id="hero-title-text" className="sr-only">nuclear fusion tokamak plasma core glowing purple blue magnetic confinement</span>
      </div>
    </section>
  );
}
