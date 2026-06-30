import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/70 via-warm-dark/40 to-warm-dark/5 z-10" />

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          data-strk-img-id="hero-bg-img-a1b2c3"
          data-strk-img="[hero-headline]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight tracking-wider">
          Crafted to<br className="md:hidden" /> be Treasured
        </h1>
        <p className="mt-6 text-cream/70 text-sm md:text-base font-sans font-light max-w-md mx-auto leading-relaxed">
          Demi-fine gold jewelry for the modern woman. Designed to elevate the everyday, made to last beyond the season.
        </p>
        <Link
          to="/shop"
          className="btn-gold mt-8"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream/40 text-[10px] tracking-super-wide uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-cream/20" />
      </div>

      <span id="hero-headline" className="hidden">gold jewelry on model warm lighting</span>
    </section>
  )
}