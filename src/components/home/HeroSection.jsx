import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603975217915-1c8bc1b6fa2f?w=1600&auto=format&fit=crop&q=80"
          alt="Warm gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-brand-950/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
        <div className="max-w-xl animate-fade-in">
          <p className="text-gold-300 text-xs tracking-[0.15em] uppercase font-sans mb-4">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-wide">
            Crafted to be Treasured
          </h1>
          <p className="mt-4 text-brand-200 text-sm md:text-base leading-relaxed max-w-md font-sans font-light">
            Heirloom-quality gold pieces, designed for everyday elegance. 
            Each piece is hand-finished in 18K gold.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold-500 text-brand-950 px-8 py-3.5 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-gold-400 transition-all duration-300 rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}