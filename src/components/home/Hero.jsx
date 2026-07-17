import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-f7a8b9"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-black/40 via-warm-black/30 to-warm-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl text-warm-cream leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-warm-cream/80 font-sans font-light max-w-xl mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry for the moments that matter. 18K gold plated, hypoallergenic, designed for everyday elegance.
        </p>
        <Link to="/shop" className="btn-primary inline-block mt-8 md:mt-10">
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
