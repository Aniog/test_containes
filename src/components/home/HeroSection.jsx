import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a1f91d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-amber-300">
            Velmora Fine Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-display text-5xl leading-none text-stone-50 sm:text-6xl lg:text-8xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-7 text-stone-200 sm:text-lg"
          >
            Quietly luxurious demi-fine pieces designed for everyday rituals, meaningful gifting, and the kind of shine that lingers long after golden hour.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-950 transition duration-300 hover:bg-amber-300"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop?category=Huggies"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-100 transition duration-300 hover:border-amber-300 hover:text-amber-300"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
