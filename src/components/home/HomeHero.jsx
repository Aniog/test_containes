import { Link } from 'react-router-dom';
import { ChevronDown, Microscope, ZoomIn } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background micrograph — Volvox colony */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=80"
          alt="Microscopic specimen background"
          className="w-full h-full object-cover opacity-25"
        />
        {/* Layered gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090D16] via-[#090D16]/80 to-[#090D16]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-[#090D16]/60" />
      </div>

      {/* Lab grid overlay */}
      <div className="absolute inset-0 lab-grid opacity-40 z-0" />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-emerald-400" />
            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase">
              Educational Microscopy Platform
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-light tracking-widest uppercase text-slate-100 mb-6 leading-none">
            <span className="block text-5xl md:text-7xl lg:text-8xl">Micro</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-emerald-400">Cosmos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-4 max-w-xl">
            Venture beyond the threshold of human perception. Explore the intricate architecture of life at the cellular and sub-cellular scale.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed mb-12 max-w-lg">
            From the geometric elegance of diatom frustules to the dynamic choreography of mitosis — every specimen tells a story written in the language of biology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/specimens"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-[#090D16] font-semibold text-xs tracking-widest uppercase transition-all duration-300"
            >
              <Microscope className="w-4 h-4" />
              Explore Specimens
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 font-medium text-xs tracking-widest uppercase transition-all duration-300"
            >
              <ZoomIn className="w-4 h-4" />
              View Slide Gallery
            </Link>
          </div>

          {/* Stats Row */}
          <div className="mt-16 flex flex-wrap gap-8 md:gap-12">
            {[
              { value: '40+', label: 'Specimen Types' },
              { value: '1000×', label: 'Max Magnification' },
              { value: '4', label: 'Illumination Modes' },
              { value: '3', label: 'Biological Domains' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-2xl font-light text-slate-100 tracking-wide">{stat.value}</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] font-mono tracking-widest uppercase text-slate-600">Scroll</span>
        <ChevronDown className="w-4 h-4 text-slate-600" />
      </div>

      {/* Right-side specimen info panel */}
      <div className="absolute right-6 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-2">
        <div className="bg-[#0E1520]/80 backdrop-blur-sm border border-slate-800/60 px-4 py-3 max-w-[180px]">
          <p className="text-[9px] font-mono tracking-widest uppercase text-emerald-400 mb-1">Specimen</p>
          <p className="text-slate-300 text-xs font-medium">Volvox Colony</p>
          <p className="text-slate-600 text-[10px] mt-1">Chlorophyta · 400×</p>
        </div>
        <div className="bg-[#0E1520]/80 backdrop-blur-sm border border-slate-800/60 px-4 py-3 max-w-[180px]">
          <p className="text-[9px] font-mono tracking-widest uppercase text-cyan-400 mb-1">Illumination</p>
          <p className="text-slate-300 text-xs font-medium">Brightfield</p>
          <p className="text-slate-600 text-[10px] mt-1">Stained · H&E</p>
        </div>
      </div>
    </section>
  );
}
