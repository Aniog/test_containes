import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-velmora-ink text-velmora-pearl">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="velmora-hero-bg-3f8a21"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/55 via-velmora-ink/28 to-velmora-ink/78" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 md:items-center md:pb-0 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">
            Demi-fine essentials, direct to you
          </p>
          <h1 id="hero-title" className="font-serifDisplay text-6xl font-medium leading-[0.92] text-velmora-pearl sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
            Warm gold jewelry for the quiet rituals, soft milestones, and unforgettable gifts of everyday life.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-pearl"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
