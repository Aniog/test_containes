import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-7f3a2e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 text-base md:text-lg text-white/80 font-sans font-light leading-relaxed max-w-xl mx-auto"
        >
          Demi-fine jewelry in 18K gold — designed for everyday elegance and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-gold text-white text-xs tracking-widest uppercase font-sans font-medium px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
