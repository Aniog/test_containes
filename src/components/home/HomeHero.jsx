import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[var(--color-ink)] pt-28 text-[var(--color-text-on-dark)] md:pt-32">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a13f7b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,18,16,0.78)_0%,rgba(24,18,16,0.46)_38%,rgba(24,18,16,0.22)_100%)]" />
      <div className="relative mx-auto flex min-h-[76vh] max-w-7xl items-end px-5 pb-14 md:px-8 md:pb-20 lg:px-12">
        <div className="max-w-2xl space-y-6">
          <p
            id="hero-subtitle"
            className="text-xs uppercase tracking-[0.42em] text-[var(--color-accent-soft)]"
          >
            Quiet luxury in 18K gold plated form
          </p>
          <h1
            id="hero-title"
            className="font-serif-display text-5xl leading-[0.95] text-[var(--color-text-on-dark)] sm:text-6xl md:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p className="max-w-xl text-base leading-8 text-[var(--color-text-on-dark-muted)] md:text-lg">
            Premium demi-fine jewelry designed for gifting, layering, and everyday rituals that feel elevated from the first clasp.
          </p>
          <div className="flex flex-col gap-4 pt-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-[var(--color-accent)] px-7 py-4 text-xs uppercase tracking-[0.34em] text-[var(--color-ink)] transition hover:opacity-90"
            >
              Shop the Collection
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center border border-white/20 px-7 py-4 text-xs uppercase tracking-[0.34em] text-[var(--color-text-on-dark)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Discover Velmora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
