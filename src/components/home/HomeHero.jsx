import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background — dark creature */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-bg-query]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Hidden query text for image search */}
      <span id="hero-bg-query" className="hidden">
        fluorescence microscopy cells black background glowing biology
      </span>

      {/* Gradient overlays — darken edges, let microscope glow show through centre */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/50" />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #1E2D42 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Scanning line animation */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-bio-green/20 to-transparent"
          style={{ animation: 'scanLine 8s linear infinite' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-bio-green" />
            <span
              id="hero-subtitle"
              className="font-mono text-xs tracking-widest uppercase text-bio-green"
            >
              Educational Microscopy Platform
            </span>
          </div>

          {/* Main title */}
          <h1
            id="hero-title"
            className="font-grotesk font-bold text-5xl md:text-7xl lg:text-8xl text-slate-100 leading-none tracking-tight mb-6"
          >
            The World
            <br />
            <span className="text-bio-green text-glow-green">Invisible</span>
            <br />
            to the Eye
          </h1>

          <p className="font-inter text-lg text-slate-400 leading-relaxed max-w-xl mb-10">
            Journey beyond the threshold of human perception. Explore the intricate architecture of cells, the geometry of diatoms, and the hidden machinery of life — magnified, annotated, and illuminated.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/specimens"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-bio-green/15 backdrop-blur-md border border-bio-green/35 text-bio-green font-grotesk font-semibold rounded-xl shadow-lg shadow-bio-green/10 hover:bg-bio-green/25 hover:border-bio-green/55 hover:shadow-bio-green/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Glass shine highlight */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bio-green/40 to-transparent" />
              Explore Specimens
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/gallery"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 backdrop-blur-md border border-white/15 text-slate-300 font-grotesk font-medium rounded-xl hover:bg-white/10 hover:border-white/25 hover:text-slate-100 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              View Slide Gallery
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-14 pt-8 border-t border-subtle/50">
            {[
              { value: '40+', label: 'Specimens' },
              { value: '1000×', label: 'Max Magnification' },
              { value: '3', label: 'Domains' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-grotesk font-bold text-2xl text-slate-100">{stat.value}</div>
                <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>



      <style>{`
        @keyframes scanLine {
          0% { top: -2px; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
