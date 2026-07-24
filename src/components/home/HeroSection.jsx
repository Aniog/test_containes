import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-dark-surface"
        data-strk-bg-id="hero-bg-velmora-7a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl font-light text-white leading-tight mb-4"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-lg md:text-xl font-light mb-8"
        >
          Demi-fine gold jewelry for the modern woman
        </p>
        <Link
          to="/shop"
          className="inline-block px-8 py-3.5 bg-accent text-white text-sm font-medium tracking-widest hover:bg-accent-hover transition-colors"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  )
}
