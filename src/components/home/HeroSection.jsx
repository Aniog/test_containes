import { Link } from 'react-router-dom'

const HeroSection = () => (
  <section className="relative isolate min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
    <div
      className="absolute inset-0"
      data-strk-bg-id="hero-bg-velmora-c8p2"
      data-strk-bg="[hero-subhead] [hero-heading]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1600"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-stone-950/10" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,230,138,0.18),transparent_28%),linear-gradient(to_bottom,rgba(12,10,9,0.12),rgba(12,10,9,0.58))]" />

    <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.38em] text-amber-200">
          Velmora Fine Jewelry
        </p>
        <h1
          className="mt-5 font-['Cormorant_Garamond'] text-5xl leading-none text-stone-50 sm:text-6xl lg:text-8xl"
          id="hero-heading"
        >
          Crafted to be Treasured
        </h1>
        <p
          className="mt-6 max-w-xl text-base leading-8 text-stone-200 sm:text-lg"
          id="hero-subhead"
        >
          Quietly luxurious demi-fine jewelry designed for self-gifting, special occasions, and everyday polish.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-amber-200 px-7 py-4 text-sm uppercase tracking-[0.26em] text-stone-950 transition duration-300 hover:bg-amber-300"
            to="/shop"
          >
            Shop the Collection
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase tracking-[0.26em] text-stone-50 transition duration-300 hover:border-amber-200 hover:text-amber-200"
            to="/about"
          >
            Discover Velmora
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
