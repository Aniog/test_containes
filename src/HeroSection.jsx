import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-softblack/40 via-velmora-softblack/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-xl">
          <p
            id="hero-subtitle"
            className="font-sans text-xs md:text-sm tracking-widest uppercase text-white/80 mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance"
          >
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-md">
            Discover jewelry designed for everyday elegance — 18K gold plated, hypoallergenic, and made to last.
          </p>
          <Link to="/shop" className="btn-primary">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}