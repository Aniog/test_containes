import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-forest text-velmora-cream">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-80"
        data-strk-bg-id="velmora-hero-bg-71d9ac"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/25 to-velmora-ink/70" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:px-12">
        <div className="max-w-3xl animate-[fadeUp_700ms_ease-out_both]">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-champagne">Demi-fine gold essentials</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] tracking-tight text-velmora-cream md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl font-sans text-base leading-8 text-velmora-cream/90 md:text-lg">
            Warm, luminous jewelry for everyday rituals, meaningful gifts, and the moments you want to keep close.
          </p>
          <Link to="/shop" className="mt-9 inline-flex bg-velmora-bronze px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-cream hover:text-velmora-ink">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
