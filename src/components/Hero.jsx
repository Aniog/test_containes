import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-7f3a2e"
        data-strk-bg="industrial metal fabrication workshop precision machinery steel"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/75 to-brand-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-block mb-6">
            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase border border-accent/30 px-4 py-1.5 rounded-sm">
              Precision Engineering
            </span>
          </div>

          <h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
            id="hero-title"
          >
            Redefining{' '}
            <span className="text-accent">Metal Folding</span>{' '}
            Excellence
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl"
            id="hero-subtitle"
          >
            ARTITECT MACHINERY delivers industry-leading double folding machines and sheet metal folders built for precision, durability, and unmatched performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-sm tracking-wide uppercase text-sm hover:bg-accent-dark transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-sm tracking-wide uppercase text-sm hover:bg-white/10 transition-colors"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </div>
    </section>
  );
}
