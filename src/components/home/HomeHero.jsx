import { Link } from 'react-router-dom'

const HomeHero = () => (
  <section className="relative min-h-[88vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
    <p id="hero-image-brief" className="sr-only">
      Warm-lit close-up of gold jewelry worn on a model, delicate earrings and necklace, editorial demi-fine jewelry.
    </p>
    <div
      className="absolute inset-0 bg-velmora-umber"
      data-strk-bg-id="velmora-hero-gold-model-9e7b1c"
      data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title]"
      data-strk-bg-ratio="16x9"
      data-strk-bg-width="1800"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-velmora-parchment/88 via-velmora-parchment/40 to-velmora-espresso/55" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-velmora-espresso/30" />
    <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24">
      <div className="max-w-3xl animate-fade-up">
        <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.34em] text-velmora-goldDark">
          Demi-fine gold jewelry
        </p>
        <h1 id="hero-title" className="font-serif text-6xl font-medium leading-none text-velmora-espresso sm:text-7xl md:text-8xl lg:text-9xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso md:text-lg">
          Warm gold, refined silhouettes, and luminous details made for everyday rituals and unforgettable gifts.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-goldDark focus:outline-none focus:ring-2 focus:ring-velmora-ivory focus:ring-offset-2 focus:ring-offset-velmora-espresso"
          >
            Shop the Collection
          </Link>
          <a
            href="#bestsellers"
            className="inline-flex items-center justify-center rounded-full border border-velmora-espresso/60 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:border-velmora-goldDark hover:text-velmora-goldDark"
          >
            Explore Bestsellers
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default HomeHero
