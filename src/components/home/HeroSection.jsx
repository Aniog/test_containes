import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-velvet-900">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(ellipse at center, rgba(214,153,54,0.15) 0%, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(48,38,33,0.3) 0%, rgba(48,38,33,0.6) 60%, rgba(48,38,33,0.85) 100%)' }}
        />
      </div>

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold-400 mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light text-cream leading-tight mb-6 tracking-wide">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-velvet-200 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed font-light">
          Heirloom-worthy demi-fine pieces in 18K gold plate, designed for the modern woman who values quiet, everyday elegance.
        </p>
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-velvet-400 font-sans">Scroll</span>
        <div className="w-px h-8 bg-velvet-500/50" />
      </div>
    </section>
  )
}