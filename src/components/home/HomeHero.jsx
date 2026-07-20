import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 velmora-image-fill opacity-70"
        data-strk-bg-id="hero-gold-jewelry-model-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry close up on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/25 via-velmora-ink/35 to-velmora-espresso/90" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">
            Demi-fine gold jewelry for every ritual
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-semibold leading-[0.92] tracking-tight text-velmora-pearl sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-bone sm:text-lg">
            Warm, luminous pieces made for gifting, self-purchase, and the everyday moments that become heirlooms.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-velmora-champagne px-8 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-pearl focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-espresso"
            >
              Shop the Collection
            </Link>
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center border border-velmora-pearl/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:border-velmora-champagne hover:text-velmora-champagne"
            >
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
