import { Link } from 'react-router-dom';
import { ArrowRight, ZoomIn } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background micrograph — Volvox colony */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=85&fit=crop"
          alt="Microscopic biological specimen"
          className="w-full h-full object-cover object-center opacity-30"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines opacity-30" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,42,58,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,58,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <span className="w-8 h-px bg-bio-green" />
            <span className="font-mono-lab text-bio-green text-xs tracking-widest uppercase">
              Educational Microscopy Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-grotesk font-bold text-primary-text mb-6 animate-fade-in-up delay-100">
            <span className="block text-5xl md:text-7xl leading-none mb-2">
              Micro
            </span>
            <span className="block text-5xl md:text-7xl leading-none text-glow-green text-bio-green">
              Cosmos
            </span>
            <span className="block text-xl md:text-2xl font-light text-secondary-text mt-4 tracking-wide">
              The Microscopic World
            </span>
          </h1>

          {/* Description */}
          <p className="font-inter text-secondary-text text-base md:text-lg leading-relaxed mb-10 max-w-lg animate-fade-in-up delay-200">
            Venture beyond the threshold of human perception. Explore the intricate
            architecture of cells, the geometry of silica frustules, and the
            choreography of life at the nanometre scale — rendered in stunning
            micrographic detail.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link
              to="/specimens"
              className="group flex items-center justify-center gap-3 px-6 py-3 bg-bio-green text-obsidian font-grotesk font-semibold text-sm tracking-wide rounded-sm hover:bg-bio-green/90 transition-all duration-300 shadow-glow-green"
            >
              Explore Specimens
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/gallery"
              className="group flex items-center justify-center gap-3 px-6 py-3 border border-subtle text-secondary-text font-inter text-sm tracking-wide rounded-sm hover:border-bio-cyan hover:text-bio-cyan transition-all duration-300"
            >
              <ZoomIn className="w-4 h-4" />
              View Slide Gallery
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-subtle animate-fade-in-up delay-400">
            {[
              { value: '40+', label: 'Specimen Types' },
              { value: '1000×', label: 'Max Magnification' },
              { value: '4', label: 'Imaging Modalities' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-grotesk font-bold text-2xl text-primary-text">{value}</div>
                <div className="font-mono-lab text-xs text-muted-text tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side decorative element */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <span className="font-mono-lab text-muted-text text-xs tracking-widest uppercase rotate-90 mb-4">
          Scroll to Explore
        </span>
        <div className="w-px h-24 bg-gradient-to-b from-bio-green/60 to-transparent" />
      </div>
    </section>
  );
}
