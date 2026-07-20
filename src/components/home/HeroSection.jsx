import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-velmora-7x9k2m"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-base md:text-lg text-white/80 font-light mb-8 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the moments that matter. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-white font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-gold-hover transition-all duration-300 no-underline"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
