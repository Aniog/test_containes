import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-k21ma8"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/55 to-stone-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/10" />

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl items-end px-4 pb-14 pt-28 md:px-6 md:pb-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.34em] text-amber-200" id="hero-kicker">
            Velmora Fine Jewelry
          </p>
          <h1 id="hero-title" className="mt-5 font-serif text-5xl leading-[0.95] text-stone-50 md:text-7xl lg:text-[5.5rem]">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-stone-200 md:text-lg">
            Quietly luminous demi-fine jewelry in warm gold finishes, designed for self-purchase,
            meaningful gifting, and the everyday ritual of dressing with intention.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-3.5 text-sm font-medium text-stone-950 transition-all duration-300 hover:bg-amber-100"
            >
              Shop the Collection
            </Link>
            <Link
              to="/product/majestic-flora-nectar"
              className="inline-flex items-center justify-center rounded-full border border-stone-50/30 px-7 py-3.5 text-sm font-medium text-stone-50 transition-all duration-300 hover:border-stone-50/70 hover:bg-stone-50/10"
            >
              Discover Gift Favorites
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
