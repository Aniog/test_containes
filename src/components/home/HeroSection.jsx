import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&q=85"
          alt="Gold jewelry on warm background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-cream/80 text-sm md:text-base uppercase tracking-[0.2em] mb-6 font-sans font-light">
            Demi-Fine Gold Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-6">
            Crafted to be
            <br />
            <span className="italic">Treasured</span>
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-lg mx-auto mb-10 font-sans font-light leading-relaxed">
            Heirloom-quality pieces designed for the modern woman. Each detail
            considered, each piece made to last.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-cream text-ink uppercase tracking-[0.12em] text-sm font-medium px-10 py-3.5 hover:bg-cream/90 transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-cream/40 mx-auto animate-pulse" />
      </div>
    </section>
  )
}