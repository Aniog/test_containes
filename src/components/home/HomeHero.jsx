import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col">
      {/* Main split layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 min-h-screen">

        {/* LEFT — Typography panel (60%) */}
        <div className="lg:col-span-3 flex flex-col justify-end pb-16 px-6 md:px-12 pt-32 lg:pt-0 bg-[#050505] relative z-10">
          {/* Top label */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 border border-[#262626] px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white telemetry-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#A0A0A0]">
                Commercial Fusion — Generation IV
              </span>
            </div>
          </div>

          {/* Main title */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-none">
              <span className="block">IGNITION</span>
              <span className="block text-[#262626] hover:text-white transition-colors duration-500">DYNAMICS</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="border-l-2 border-[#262626] pl-6 mb-10 max-w-lg">
            <p className="text-[#A0A0A0] text-lg leading-relaxed">
              Engineering the post-carbon civilization through commercial nuclear fusion at planetary scale. 
              From Tokamak confinement to global tritium breeding — the fusion era begins now.
            </p>
          </div>

          {/* Spec row */}
          <div className="grid grid-cols-3 gap-0 border border-[#262626] mb-10 max-w-lg">
            {[
              { label: 'Plasma Temp', value: '150M °K' },
              { label: 'Q-Factor', value: '≥ 10.0' },
              { label: 'Grid Output', value: '2.4 GW' },
            ].map(({ label, value }, i) => (
              <div
                key={label}
                className={`px-5 py-4 ${i < 2 ? 'border-r border-[#262626]' : ''}`}
              >
                <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-1">{label}</div>
                <div className="font-mono text-lg text-white font-bold">{value}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/reactors"
              className="flex items-center gap-3 bg-white text-black px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#E0E0E0] transition-colors duration-200"
            >
              Explore Reactors
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-3 border border-[#262626] text-white px-6 py-3 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors duration-200"
            >
              Request Grid Access
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3">
            <ChevronDown className="w-4 h-4 text-[#555555] telemetry-pulse" />
            <span className="font-mono text-[10px] text-[#555555] tracking-widest uppercase">Scroll to Explore</span>
          </div>
        </div>

        {/* RIGHT — Image panel (40%) */}
        <div className="lg:col-span-2 relative overflow-hidden min-h-[50vh] lg:min-h-screen">
          {/* Telemetry overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            {/* Top-left corner bracket */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/20" />
            {/* Bottom-right corner bracket */}
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/20" />
            {/* Telemetry data overlay */}
            <div className="absolute bottom-8 left-6 right-6">
              <div className="bg-[#050505]/70 backdrop-blur-sm border border-[#262626] p-4">
                <div className="font-mono text-[9px] text-[#555555] tracking-widest uppercase mb-2">
                  DAEDALUS-VII — PLASMA CORE VISUAL
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="font-mono text-[8px] text-[#555555] uppercase">Confinement</div>
                    <div className="font-mono text-xs text-white">MAGNETIC — 8.2T</div>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] text-[#555555] uppercase">Status</div>
                    <div className="font-mono text-xs text-white flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-white telemetry-pulse" />
                      BURNING
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="absolute inset-0"
            data-strk-bg-id="hero-plasma-core-8f2a9c"
            data-strk-bg="[hero-title-ref] [hero-subtitle-ref]"
            data-strk-bg-ratio="9x16"
            data-strk-bg-width="800"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=90"
            alt="Tokamak plasma core — glowing purple and blue fusion plasma"
            className="absolute inset-0 w-full h-full object-cover img-zoom"
            data-strk-img-id="hero-tokamak-plasma-3d7b1e"
            data-strk-img="[hero-title-ref] [hero-subtitle-ref]"
            data-strk-img-ratio="9x16"
            data-strk-img-width="800"
          />

          {/* Gradient fade to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent z-[5]" />
          {/* Gradient fade to bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent z-[5]" />
        </div>
      </div>

      {/* Hidden text refs for image queries */}
      <span id="hero-title-ref" className="sr-only">Tokamak nuclear fusion reactor plasma core glowing purple blue magnetic confinement</span>
      <span id="hero-subtitle-ref" className="sr-only">nuclear fusion energy plasma physics high energy particle accelerator</span>
    </section>
  );
}
