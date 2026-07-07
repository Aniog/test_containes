import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="velmora-hero-bg-4fb9d2"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/30 via-velmora-ink/25 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] tracking-[-0.04em] md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-ivory md:text-lg">
            Warm, luminous pieces designed for daily rituals, meaningful gifts, and the quiet confidence of gold against skin.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-glow transition hover:bg-velmora-ivory"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
