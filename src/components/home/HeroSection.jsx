import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-velmora-ink text-velmora-ivory" id="top">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="velmora-hero-bg-4c8f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/25 via-velmora-ink/35 to-velmora-ink/85" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] tracking-[-0.03em] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
            Warm, luminous pieces for daily rituals and unforgettable gifts — designed in 18K gold plating with a quiet editorial glow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/shop" className="inline-flex items-center justify-center rounded-full bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink shadow-[0_18px_40px_rgba(197,157,95,0.28)] transition hover:bg-velmora-gold hover:shadow-[0_22px_55px_rgba(217,179,108,0.34)]">
              Shop the Collection
            </Link>
            <a href="#bestsellers" className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne">
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
