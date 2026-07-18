import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-1d72ae"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,17,17,0.84)_0%,rgba(24,17,17,0.46)_50%,rgba(24,17,17,0.2)_100%)]" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end">
        <div className="max-w-2xl space-y-6 text-[var(--color-text-dark)]">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Fine layers for every day
          </p>
          <h1 id="hero-title" className="font-serif text-5xl leading-[0.95] md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-[var(--color-muted-dark)] md:text-lg">
            Quietly luminous demi-fine jewelry designed for self-purchase, meaningful gifts, and the ritual of getting dressed well.
          </p>
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-[var(--color-accent)] px-7 py-4 text-xs uppercase tracking-[0.32em] text-[var(--color-bg)] transition hover:translate-y-[-1px] hover:opacity-90"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
