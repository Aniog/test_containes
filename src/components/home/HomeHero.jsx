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
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian"
    >
      {/* Hidden query anchor for image search */}
      <span id="hero-bg-query" className="hidden">
        fluorescence microscopy cells black background glowing biology
      </span>
      <span id="hero-title" className="hidden">The Microscopic World</span>

      {/* Fine dot-grid background texture */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle radial vignette from centre */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,#000000_100%)]" />

      {/* Scanning line */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          style={{ animation: 'scanLine 10s linear infinite' }}
        />
      </div>

      {/* ── SPLIT LAYOUT ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 lg:pr-12">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/60" />
              <span className="font-mono text-xs tracking-widest uppercase text-slate-400">
                Educational Microscopy Platform
              </span>
            </div>

            {/* Title */}
            <h1 className="font-grotesk font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6">
              The World
              <br />
              <span className="text-white/50 italic">Invisible</span>
              <br />
              to the Eye
            </h1>

            <p className="font-inter text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mb-10">
              Journey beyond the threshold of human perception. Explore the intricate architecture of cells, the geometry of diatoms, and the hidden machinery of life — magnified, annotated, and illuminated.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/specimens"
                className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-grotesk font-semibold rounded-xl hover:bg-white/18 hover:border-white/50 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                Explore Specimens
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/gallery"
                className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-white/4 backdrop-blur-md border border-white/12 text-slate-300 font-grotesk font-medium rounded-xl hover:bg-white/10 hover:border-white/25 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                View Slide Gallery
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              {[
                { value: '40+', label: 'Specimens' },
                { value: '1000×', label: 'Max Magnification' },
                { value: '3', label: 'Domains' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  <div>
                    <div className="font-grotesk font-bold text-2xl text-white">{stat.value}</div>
                    <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mt-0.5">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/10" />}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Microscope eyepiece view ── */}
          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <div className="relative" style={{ width: 'min(480px, 90vw)', height: 'min(480px, 90vw)' }}>

              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/6" style={{ transform: 'scale(1.18)' }} />
              <div className="absolute inset-0 rounded-full border border-white/10" style={{ transform: 'scale(1.09)' }} />

              {/* Tick marks around the ring */}
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    width: i % 6 === 0 ? '10px' : '5px',
                    height: '1px',
                    background: i % 6 === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.15)',
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    transform: `rotate(${i * 15}deg) translateX(${(Math.min(480, window?.innerWidth * 0.9 || 480) / 2) * 1.09 - (i % 6 === 0 ? 10 : 5)}px) translateY(-0.5px)`,
                  }}
                />
              ))}

              {/* Crosshair lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'scale(1.09)' }}>
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              </div>

              {/* Main circular micrograph */}
              <div className="absolute inset-0 rounded-full overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.06),0_0_120px_rgba(255,255,255,0.03)]">
                <img
                  src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_1200/unsplashcom/photo-1576086213369-97a306d36557"
                  alt="Fluorescence microscopy — cells under the lens"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.15) brightness(0.85)' }}
                />
                {/* Inner vignette to blend edges into black */}
                <div className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle, transparent 45%, rgba(0,0,0,0.55) 72%, rgba(0,0,0,0.95) 100%)' }}
                />
                {/* Subtle scan-line texture */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)',
                  }}
                />
              </div>

              {/* Centre crosshair dot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 ring-1 ring-white/20 ring-offset-2 ring-offset-transparent" />
              </div>

              {/* Magnification badge — bottom */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-sm border border-white/15">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span className="font-mono text-xs text-slate-300 tracking-widest uppercase">400× · Brightfield</span>
              </div>

              {/* Specimen label — top-right */}
              <div className="absolute -top-3 -right-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/12">
                <span className="font-mono text-xs text-slate-400 tracking-wider">SLD-001</span>
              </div>

              {/* Scale bar — bottom-right inside circle */}
              <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 pointer-events-none">
                <div className="flex items-center gap-0">
                  <div className="w-px h-2 bg-white/50" />
                  <div className="w-10 h-px bg-white/50" />
                  <div className="w-px h-2 bg-white/50" />
                </div>
                <span className="font-mono text-[9px] text-white/50 tracking-wider">10 µm</span>
              </div>
            </div>
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
