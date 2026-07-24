import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1600&q=80"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/40 via-charcoal-950/30 to-charcoal-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <p className="text-gold-300 text-xs md:text-sm tracking-widest uppercase mb-4 font-sans">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Crafted to be<br />Treasured
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-lg mx-auto mb-8 font-light leading-relaxed">
          Timeless pieces designed for the modern woman. 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-3 bg-gold-500 text-white px-10 py-4 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-600 transition-all duration-300 group"
        >
          Shop the Collection
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-white/40 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border border-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
