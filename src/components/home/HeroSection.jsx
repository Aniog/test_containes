import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-velmora-umber"
        data-strk-bg-id="velmora-hero-bg-c7a91d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/90 via-velmora-espresso/50 to-velmora-espresso/15" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-velmora-espresso/80 to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:items-center md:pb-0 md:pt-24">
        <div className="max-w-2xl animate-[velmoraFadeUp_900ms_ease-out_both]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine jewelry for every glow</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-[-0.04em] text-velmora-ivory sm:text-7xl md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
            Warm gold silhouettes, crystal-lit accents, and modern heirlooms made for self-purchase, gifting, and every day in between.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/shop" className="bg-velmora-champagne px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition-all duration-300 hover:bg-velmora-ivory hover:shadow-[0_18px_60px_rgba(196,154,90,0.35)]">
              Shop the Collection
            </Link>
            <Link to="/product/golden-sphere-huggies" className="border border-velmora-ivory/45 px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition-all duration-300 hover:border-velmora-champagne hover:text-velmora-champagne">
              View bestsellers
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
