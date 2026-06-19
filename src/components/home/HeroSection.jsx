import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-screen min-h-[600px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1600&q=85"
          alt="Gold jewelry close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl">
            <span className="inline-block text-xs tracking-widest uppercase text-brand-gold mb-4">
              Velmora Fine Jewelry
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight font-semibold">
              Crafted to be
              <br />
              <span className="italic">Treasured</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mt-6 max-w-md leading-relaxed">
              Demi-fine gold jewelry designed for everyday elegance. Each piece is thoughtfully made to last a lifetime.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/shop"
                className="inline-block bg-brand-gold text-white text-xs tracking-widest uppercase py-4 px-10 hover:bg-brand-gold-dark transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/collections"
                className="inline-block border border-white/40 text-white text-xs tracking-widest uppercase py-4 px-10 hover:bg-white hover:text-brand-charcoal transition-all duration-300"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  )
}