import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image using stock image system */}
      <div className="absolute inset-0 z-0">
        <div
          data-strk-bg-id="hero-bg-velmora-a7c9d2"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 bg-stone-950"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto animate-fade-in">
        <h1
          id="hero-title"
          className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-sm md:text-base text-white/70 font-light tracking-wide leading-relaxed mb-8 max-w-lg mx-auto"
        >
          Demi-fine jewelry in 18K gold. Designed for the everyday, made to last a lifetime.
        </p>
        <Link to="/shop" className="btn-gold inline-block">
          Shop the Collection
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream-100 to-transparent z-10" />
    </section>
  )
}
