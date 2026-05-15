import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, ZoomIn } from 'lucide-react';

const HomeHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background micrograph image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=85&fit=crop"
          alt="Fluorescent microscopy of biological cells"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/40" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-bio-green/5 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-bio-cyan/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-bio-green" />
            <span className="font-mono text-[11px] text-bio-green tracking-widest uppercase">
              Educational Microscopy Platform
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight mb-6">
            <span className="block">The World</span>
            <span className="block text-bio-green text-glow-green">Invisible</span>
            <span className="block">to the Eye</span>
          </h1>

          {/* Subheading */}
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
            Traverse the boundary between the macroscopic and the microscopic. Explore the intricate architecture of life — from the geometric precision of plant cell walls to the dynamic choreography of single-celled organisms.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/specimens"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-bio-green text-obsidian font-semibold rounded-full hover:bg-bio-green-dim transition-all duration-200 shadow-glow-green group"
            >
              <Microscope className="w-4 h-4" />
              Explore Specimens
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-bio-green/30 text-bio-green font-medium rounded-full hover:bg-bio-green/8 transition-all duration-200 group"
            >
              <ZoomIn className="w-4 h-4" />
              View Slide Gallery
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border-dim">
            {[
              { value: '12+', label: 'Specimen Types' },
              { value: '3', label: 'Biological Domains' },
              { value: '1000×', label: 'Max Magnification' },
              { value: '4', label: 'Illumination Modes' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-text-primary font-mono">{value}</div>
                <div className="text-text-muted text-xs tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-bio-green/40 to-transparent" />
      </div>
    </section>
  );
};

export default HomeHero;
