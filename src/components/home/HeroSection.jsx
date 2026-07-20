import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main-q1w2e3"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="text-white/80 text-base md:text-lg font-light mb-8 max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance. Timeless pieces, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block bg-accent text-white px-8 py-3.5 uppercase tracking-widest text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
