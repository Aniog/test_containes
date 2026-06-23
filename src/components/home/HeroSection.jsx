import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden pt-24 sm:min-h-screen">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-91a2cf"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-end px-4 pb-16 pt-12 sm:px-6 sm:pb-20 lg:px-10">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.34em] text-accent">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="text-balance text-5xl text-foreground-strong sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-sm leading-7 text-foreground sm:text-base sm:leading-8">
            Warm-lit demi-fine gold jewelry for self-purchase, celebrations, and thoughtful gifting — refined enough to feel special, effortless enough to wear every day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="inline-flex h-14 items-center justify-center rounded-full bg-accent px-8 text-xs font-medium uppercase tracking-[0.24em] text-ink transition duration-300 hover-lift hover:brightness-105"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#story"
              className="inline-flex h-14 items-center justify-center rounded-full border border-hairline-dark bg-panel-dark px-8 text-xs font-medium uppercase tracking-[0.24em] text-foreground transition duration-300 hover:border-accent hover:text-accent"
            >
              Discover the Brand
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
