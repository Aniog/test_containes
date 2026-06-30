import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/80">
        {/* Warm overlay pattern */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-gold/20 via-transparent to-transparent" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold/80 font-sans font-light mb-6">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light leading-[0.95] mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-cream/60 font-light text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-3.5 bg-gold text-cream text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-cream/40 font-sans">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  )
}
