import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-screen items-end overflow-hidden bg-velmora-cocoa text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-91a2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-cocoa via-velmora-cocoa/70 to-velmora-cocoa/20" />
      <div className="velmora-shell relative z-10 w-full pb-20 pt-32 sm:pb-24 lg:pb-28">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-luxe text-velmora-blush">
            Quiet luxury for every day
          </p>
          <h1 id="hero-title" className="font-display text-6xl leading-none text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="max-w-xl text-base leading-7 text-velmora-sand sm:text-lg">
            Premium demi-fine jewelry designed for gifting, layering, and the kind
            of daily polish that feels beautifully personal.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="velmora-button">
              Shop the Collection
            </Link>
            <Link to="/about" className="velmora-button-secondary">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
