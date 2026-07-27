import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative -mt-[76px] min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-a1"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/35" />
      <div className="absolute inset-0 bg-stone-950/20" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:items-center lg:px-10">
        <div className="max-w-2xl space-y-7">
          <p className="text-xs uppercase tracking-[0.38em] text-amber-200">
            Quiet luxury in warm gold
          </p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-lg text-base leading-8 text-stone-200 sm:text-lg">
            Demi-fine jewelry for gifting, layering, and collecting — designed to feel
            elevated every day, from golden hour dinners to quiet mornings at home.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-4 text-sm uppercase tracking-[0.3em] text-stone-950 transition duration-300 hover:bg-amber-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/product/royal-heirloom-set"
              className="inline-flex items-center justify-center rounded-full border border-stone-50/30 px-7 py-4 text-sm uppercase tracking-[0.3em] text-stone-50 transition duration-300 hover:bg-stone-50/10"
            >
              Explore Gift Sets
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
