import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-velmora-text"
        data-strk-bg-id="hero-bg-velmora-1a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-wide"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-white/85 font-light max-w-xl mx-auto leading-relaxed"
          >
            Elevated essentials in 18k gold plate—designed for everyday moments
            that deserve a little glow.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-10 py-4 bg-velmora-accent text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-velmora-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
