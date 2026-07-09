import { Link } from 'react-router-dom'

const HeroSection = () => {
  const titleId = 'hero-title'
  const subtitleId = 'hero-subtitle'

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-espresso text-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-001"
        data-strk-bg={`[${subtitleId}] [${titleId}]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso/85" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-8">
        <div className="max-w-2xl rounded-[32px] border border-ivory/10 bg-espresso/35 p-6 shadow-soft backdrop-blur-sm sm:p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.38em] text-champagne">Velmora Fine Jewelry</p>
          <h1 id={titleId} className="mt-5 font-serif text-5xl leading-[0.95] text-ivory sm:text-6xl md:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id={subtitleId} className="mt-6 max-w-xl text-sm leading-8 text-ivory/88 md:text-base">
            Premium demi-fine gold jewelry designed for self-purchase, thoughtful gifting, and the kind of daily styling that feels quietly unforgettable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:bg-champagne hover:text-espresso"
            >
              Shop the Collection
            </Link>
            <Link
              to="/product/golden-sphere-huggies"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.24em] text-ivory transition hover:border-gold hover:text-gold"
            >
              View Bestseller
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
