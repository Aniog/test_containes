import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=1600&q=85"
          alt="Gold jewelry on a warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-xl">
          <p className="text-velmora-gold-light text-sm tracking-wider uppercase font-sans font-medium mb-4">
            New Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light">
            Crafted to be
            <br />
            <span className="font-semibold italic">Treasured</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-6 max-w-md leading-relaxed">
            Demi-fine gold jewelry designed for everyday elegance. Each piece, handcrafted to last a lifetime.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 btn-primary mt-8"
          >
            Shop the Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-12 bg-white/30" />
      </div>
    </section>
  )
}