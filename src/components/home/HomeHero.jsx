import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative -mt-20 min-h-[100svh] overflow-hidden bg-velmora-ink pt-20 text-white sm:-mt-24 sm:pt-24">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7c2d8f"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-white/70">
            Velmora Fine Jewelry
          </p>
          <h1 id="hero-title" className="mt-6 font-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-[5.75rem]">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            Warm gold layers, sculptural huggies, and gift-worthy pieces designed for quiet confidence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-full bg-velmora-bronze px-7 text-xs font-medium uppercase tracking-[0.28em] text-velmora-ivory shadow-velmora transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Shop the Collection
            </Link>
            <p className="text-sm text-white/70">Premium demi-fine pieces from $30–$120</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
