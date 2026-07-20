import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&auto=format&fit=crop"
          alt="Gold jewelry on model"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight text-balance">
              Crafted to be Treasured
            </h1>
            <p className="text-white/80 text-base sm:text-lg mt-4 md:mt-6 leading-relaxed max-w-md">
              Demi-fine gold jewelry designed for everyday elegance. Each piece is made to be worn, loved, and passed down.
            </p>
            <Link
              to="/shop"
              className="inline-block mt-6 md:mt-8 px-8 py-3.5 bg-gold hover:bg-gold-dark text-white text-sm uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:shadow-lg"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-white/40" />
      </div>
    </section>
  )
}