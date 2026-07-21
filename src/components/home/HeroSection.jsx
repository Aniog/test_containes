import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-cream">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="home-hero-bg-9f2c41"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/30 via-velmora-ink/25 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] tracking-[-0.04em] text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-stone sm:text-lg">
            Warm, luminous pieces designed for everyday rituals, self-purchase moments, and gifts that feel deeply considered.
          </p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink shadow-[0_16px_45px_rgba(199,164,107,0.28)] transition hover:bg-velmora-cream hover:text-velmora-ink">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
