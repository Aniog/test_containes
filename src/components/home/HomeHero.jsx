import { Link } from 'react-router-dom'

const HomeHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-noir text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a91f"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-noir/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-noir/95 via-noir/70 to-noir/30" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          <p className="eyebrow text-ivory/70">Velmora Fine Jewelry</p>
          <h1 id="hero-headline" className="font-display text-5xl leading-[0.95] text-ivory sm:text-6xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-ivory/78 sm:text-lg">
            Quietly luminous demi-fine jewelry for everyday rituals, thoughtful gifting, and soft golden polish.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm uppercase tracking-brand text-noir transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop/royal-heirloom-set"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm uppercase tracking-brand text-ivory transition hover:bg-white/10"
            >
              Explore the Gift Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
