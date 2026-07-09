import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="velmora-hero-bg-018f4d"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/70 to-stone-950/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/45 via-transparent to-stone-950/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <p id="hero-image-context" className="sr-only">
            warm close-up gold demi-fine jewelry on model skin editorial quiet luxury
          </p>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-amber-200">
            Demi-fine gold essentials
          </p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] text-stone-50 md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-2xl text-base leading-8 text-amber-200 md:text-lg">
            Warm-lit gold jewelry, designed in small rituals for self-purchase, gifting, and every quiet milestone in between.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex bg-amber-700 px-7 py-4 text-xs font-bold uppercase tracking-[0.28em] text-stone-50 shadow-xl transition hover:-translate-y-0.5 hover:bg-stone-50 hover:text-stone-950"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
