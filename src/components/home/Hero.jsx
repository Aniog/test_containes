import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="velmora-hero-bg-a61f2e"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/45 to-velmora-ink/25" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl animate-[fadeUp_900ms_ease-out_both]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.9] text-velmora-cream md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-cream/82 md:text-lg">
            Warm 18K gold-plated pieces with a quiet editorial glow — made for daily rituals, meaningful gifts, and the moments you keep close.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-velmora-champagne px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-rose focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
