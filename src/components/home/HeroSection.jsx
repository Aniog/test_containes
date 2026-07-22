import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-950"
        data-strk-bg-id="hero-bg-warm-gold"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1
              id="hero-headline"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight font-light"
            >
              Crafted to be{' '}
              <span className="font-semibold italic">Treasured</span>
            </h1>
            <p
              id="hero-subhead"
              className="mt-4 md:mt-6 text-base md:text-lg text-white/70 font-sans font-light leading-relaxed max-w-md"
            >
              Demi-fine gold jewelry, handcrafted for the woman who values timeless elegance and everyday luxury.
            </p>
            <Link
              to="/shop"
              className="btn-primary inline-block mt-6 md:mt-8"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}