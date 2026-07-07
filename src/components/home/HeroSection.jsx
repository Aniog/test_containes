import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-porcelain">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-a7c21f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/45 to-velmora-espresso/10" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-velmora-porcelain sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
            Warm, luminous pieces made for everyday rituals, meaningful gifts, and the quiet luxury of choosing yourself.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/shop" className="inline-flex justify-center rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-soft transition hover:bg-velmora-porcelain">
              Shop the Collection
            </Link>
            <a href="#bestsellers" className="inline-flex justify-center rounded-full border border-velmora-porcelain/50 px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold">
              Explore Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
