import { Link } from 'react-router-dom'

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden">
    <div
      className="absolute inset-0"
      data-strk-bg-id="hero-bg-velmora-8b3f1a"
      data-strk-bg="[hero-visual-cue] [hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/35" />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

    <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-36 lg:px-10">
      <div className="max-w-3xl space-y-8">
        <p className="tracking-kicker text-xs uppercase text-amber-200">
          Modern heirlooms for every day
        </p>
        <div className="space-y-5">
          <h1 id="hero-title" className="font-display text-6xl font-semibold leading-none text-stone-50 md:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-7 text-stone-200 md:text-lg">
            Warm gold layers, softly sculpted silhouettes, and giftable demi-fine pieces designed to stay in rotation.
          </p>
          <span id="hero-visual-cue" className="sr-only">
            warm-lit close-up of gold jewelry on a model with editorial beauty styling
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition duration-300 hover:bg-amber-100"
          >
            Shop the Collection
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-stone-50/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:border-amber-200/50 hover:text-amber-200"
          >
            Discover Velmora
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
