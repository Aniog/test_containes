import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-vdark">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Velmora jewelry hero"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/70 mb-6">
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-4xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-white/70 mt-6 max-w-md leading-relaxed"
        >
          Demi-fine gold jewelry, designed for everyday elegance and moments that
          matter.
        </p>
        <Link
          to="/shop"
          className="mt-10 btn-primary bg-white text-vdark hover:bg-vcream"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
