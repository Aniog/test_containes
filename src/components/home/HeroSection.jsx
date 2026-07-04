import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <p
          id="hero-subtitle"
          className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-6"
        >
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.1] max-w-4xl"
        >
          Crafted to be<br />Treasured
        </h1>
        <Link
          to="/shop"
          className="mt-10 bg-accent text-white px-10 py-4 font-sans text-xs uppercase tracking-[0.15em] hover:bg-accent-hover transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
