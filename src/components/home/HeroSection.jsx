import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=80"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-velvet-50 leading-tight mb-6">
              Crafted to be
              <br />
              <span className="text-gold">Treasured</span>
            </h1>
            <p className="text-velvet-50/70 text-base md:text-lg max-w-md mb-10 font-sans font-light leading-relaxed">
              Demi-fine gold jewelry designed for the woman who values quality, 
              craftsmanship, and quiet elegance — at prices that surprise.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-gold text-velvet font-medium uppercase tracking-[0.2em] text-xs px-10 py-4 hover:bg-gold-light transition-all duration-300 rounded-sm group"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  )
}