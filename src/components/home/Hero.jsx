import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-black/50 via-velmora-black/30 to-velmora-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-velmora-cream tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-5 md:mt-6 text-sm md:text-base text-velmora-cream/80 font-sans max-w-lg mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-velmora-gold text-velmora-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-velmora-gold-light transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
