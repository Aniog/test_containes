import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-obsidian text-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-8f1a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-36 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-luxe text-champagne">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="max-w-2xl text-balance text-5xl text-ivory sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-ivory/80 sm:text-lg">
            Quietly luxurious demi-fine gold jewelry designed for everyday glow, meaningful gifting, and the moments you want to keep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex rounded-full bg-champagne px-7 py-3 text-sm font-medium uppercase tracking-[0.22em] text-obsidian transition hover:bg-ivory"
            >
              Shop the Collection
            </Link>
            <a
              href="/#story"
              className="inline-flex rounded-full border border-white/20 px-7 py-3 text-sm font-medium uppercase tracking-[0.22em] text-ivory transition hover:border-champagne hover:text-champagne"
            >
              Discover Velmora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
