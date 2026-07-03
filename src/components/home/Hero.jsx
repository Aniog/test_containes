import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-sm md:text-base text-white/80 font-light tracking-wide max-w-md mx-auto"
        >
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story worth wearing.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 bg-brand-accent text-white uppercase tracking-[0.15em] text-xs font-medium px-10 py-3.5 hover:bg-brand-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
