import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-porcelain">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="hero-jewelry-model-01a7ce"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso via-velmora-espresso/42 to-velmora-espresso/18" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-velmora-espresso to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.34em] text-velmora-gold">
            Demi-fine gold jewelry, direct to you
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-velmora-porcelain sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-sand sm:text-lg">
            Warm 18K gold-plated pieces for everyday rituals, luminous gifting, and the quiet pleasure of choosing something beautiful for yourself.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-porcelain"
            >
              Shop the Collection
            </Link>
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center rounded-full border border-velmora-porcelain/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-porcelain transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              View Bestsellers
            </a>
          </div>
        </div>

        <div className="hidden self-end justify-self-end border-l border-velmora-sand/25 pl-8 text-right lg:block">
          <p className="font-serif text-3xl text-velmora-porcelain">Quiet shine, never ordinary.</p>
          <p className="mt-4 text-sm leading-7 text-velmora-sand">
            Editorial silhouettes, hypoallergenic finishes, and premium details at a thoughtful price point.
          </p>
        </div>
      </div>
    </section>
  )
}
