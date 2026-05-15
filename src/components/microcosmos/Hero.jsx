import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1800&q=85&fit=crop"
          alt="Microscopic world"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p
          className="text-violet-300 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          A Journey Into the Invisible
        </p>
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The World <br />
          <span className="italic text-violet-300">Beneath</span> Our Eyes
        </h1>
        <p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore the breathtaking universe that exists at the microscopic scale —
          where cells dance, crystals bloom, and life reveals its most intricate secrets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Gallery
          </a>
          <a
            href="#worlds"
            className="px-8 py-4 rounded-full border border-white/30 hover:border-white/60 text-white font-semibold text-base transition-all duration-300 hover:bg-white/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore Worlds
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#gallery"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
