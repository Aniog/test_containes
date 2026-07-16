import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="luxury gold jewelry on dark velvet background close-up warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-warm-black/70 via-warm-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl animate-slide-up">
          <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-4">
            Demi-Fine Collection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-heading-xl text-white font-light leading-tight">
            Crafted to be<br />
            <span className="font-medium italic">Treasured</span>
          </h1>
          <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-md">
            18K gold-plated jewelry designed for the modern woman. Accessible luxury
            that transitions effortlessly from day to night.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-block bg-gold text-warm-black px-8 py-3.5 text-xs font-semibold tracking-[0.12em] uppercase hover:bg-gold-light transition-colors"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-block border border-white/30 text-white px-8 py-3.5 text-xs font-medium tracking-[0.12em] uppercase hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-6 bg-white/30" />
      </div>
    </section>
  )
}
