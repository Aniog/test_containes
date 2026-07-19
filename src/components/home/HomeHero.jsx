import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative h-screen min-h-[650px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-espresso/35" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p id="hero-subtitle" className="text-gold-pale text-xs md:text-sm tracking-[0.25em] uppercase font-sans font-medium mb-4">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight text-balance mb-6 tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-sand/80 text-sm md:text-base font-sans font-light max-w-lg mx-auto mb-10 leading-relaxed">
          Premium 18K gold-plated jewelry designed for the modern woman.
          Everyday elegance at an accessible price.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-gold text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/60">
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-cream/30" />
      </div>
    </section>
  )
}
