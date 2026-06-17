import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const imgs = container.querySelectorAll('[data-strk-img-id]')
    if (imgs.length > 0) {
      import('@strikingly/sdk').then(({ ImageHelper }) => {
        // loaded via effect
      })
    }
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy/90 to-slate-900/95" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #d4a853 1px, transparent 1px), radial-gradient(circle at 75% 75%, #d4a853 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Decorative gold accent line */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-brand-gold/60 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-brand-gold/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand badge */}
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
            <span className="text-brand-gold text-xs tracking-[0.25em] uppercase font-medium">
              Precision Engineering
            </span>
            <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Precision in
            <br />
            <span className="text-brand-gold">Every Fold</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium sheet metal folding machines engineered for accuracy, durability, and
            unmatched performance. From compact folders to industrial folding systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="bg-brand-gold hover:bg-brand-gold-hover text-brand-navy px-10 py-3.5 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="border border-white/30 text-white hover:border-brand-gold hover:text-brand-gold px-10 py-3.5 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-brand-gold transition-colors animate-bounce"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  )
}