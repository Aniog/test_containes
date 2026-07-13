import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-deep"
        data-strk-bg-id="hero-bg-velmora-8k2m1n"
        data-strk-bg="[hero-subtitle-velmora-8k2m1n] [hero-title-velmora-8k2m1n]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-title-velmora-8k2m1n"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle-velmora-8k2m1n"
            className="mt-4 md:mt-6 text-cream/80 text-sm md:text-base max-w-md leading-relaxed"
          >
            Demi-fine gold jewelry designed for the woman who values elegance in every detail.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-cream px-8 py-3.5 text-xs uppercase tracking-ultra-wide font-medium hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
