import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-velmora-deep">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-wider">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="text-sm md:text-base text-white/70 max-w-md mx-auto mb-8 leading-relaxed font-light">
          Demi-fine gold jewelry designed for the modern woman — luxurious, accessible, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3 bg-velmora-gold text-white text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
