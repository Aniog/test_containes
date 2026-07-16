import { Link } from 'react-router-dom'

const stats = [
  { label: 'Loved by', value: '24K+ women' },
  { label: 'Gift-ready orders', value: 'Signature boxed' },
  { label: 'Price range', value: '$30–$120' },
]

const HomeHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,19,0.86)_0%,rgba(23,20,19,0.58)_45%,rgba(23,20,19,0.25)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-12 pt-28 md:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-velmora-mist">
            Quiet luxury for everyday rituals
          </p>
          <h1 id="hero-title" className="max-w-xl font-serif text-6xl leading-[0.95] text-velmora-ivory md:text-7xl lg:text-[6.5rem]">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-lg text-base leading-8 text-velmora-mist md:text-lg">
            Premium demi-fine gold jewelry designed to slip effortlessly between self-purchase, thoughtful gifting, and every polished moment in between.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-velmora-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-velmora-gold-deep hover:text-velmora-ivory"
            >
              Shop the Collection
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ivory transition-all duration-300 hover:border-velmora-gold hover:text-velmora-gold"
            >
              Explore Bestsellers
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3 md:gap-6 lg:max-w-4xl">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-velmora-mist">{item.label}</p>
              <p className="mt-2 text-lg font-medium text-velmora-ivory">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeHero
