import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--velmora-ink)] pt-28 text-white md:pt-32">
      <span id="hero-image-scene" className="sr-only">
        warm-lit close-up of elegant gold jewelry worn on a woman in a quiet luxury editorial setting
      </span>
      <span id="hero-image-mood" className="sr-only">
        premium demi-fine gold necklaces and earrings with soft warm lighting and refined styling
      </span>
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-74cd2b"
        data-strk-bg="[hero-image-scene] [hero-image-mood] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,36,29,0.82),rgba(47,36,29,0.46),rgba(47,36,29,0.28))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,36,29,0.18),rgba(47,36,29,0.42))]" />

      <div className="relative mx-auto grid min-h-[88svh] max-w-7xl items-end px-5 pb-16 pt-12 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-xl space-y-8">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.36em] text-white/70">Velmora Fine Jewelry</p>
            <h1 id="hero-title" className="text-5xl leading-[0.92] text-white sm:text-6xl md:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-lg text-base leading-7 text-white/82 md:text-lg">
              Quietly luxurious demi-fine gold jewelry for gifting, layering, and everyday polish — designed to feel elevated without feeling out of reach.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-[var(--velmora-gold)] px-7 py-3.5 text-xs uppercase tracking-[0.28em] text-[var(--velmora-ink)] transition duration-300 hover:translate-y-[-1px] hover:bg-[#c79d61]"
            >
              Shop the Collection
            </Link>
            <p className="text-sm text-white/70">Premium-but-accessible pieces from $30 to $120</p>
          </div>
        </div>
      </div>
    </section>
  )
}
