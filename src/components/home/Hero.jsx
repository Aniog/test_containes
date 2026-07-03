import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.05em] leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto"
        >
          Demi-fine gold jewelry for the moments that matter. 18K gold plated, hypoallergenic, and designed for everyday elegance.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-gold-dark transition-colors duration-200"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
