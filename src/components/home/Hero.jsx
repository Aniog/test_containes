import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-cream">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="velmora-hero-bg-c8f4a2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/35 to-velmora-ink/90" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 md:pb-28 lg:px-12">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">
            Demi-fine gold essentials
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-cream sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">
            Warm 18K gold-plated jewelry made for daily rituals, memorable gifts, and every quiet moment of self-adornment.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink shadow-glow transition hover:bg-velmora-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
