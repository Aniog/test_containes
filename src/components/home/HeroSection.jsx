import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-porcelain">
      <div
        className="absolute inset-0 velmora-image"
        data-strk-bg-id="hero-gold-jewelry-model-b41c9a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 velmora-hero-scrim" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="velmora-hero-copy max-w-2xl velmora-reveal">
          <p className="velmora-hero-muted mb-5 text-xs font-semibold uppercase tracking-luxury">Demi-fine jewelry for luminous rituals</p>
          <h1 id="hero-title" className="font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="velmora-hero-muted mt-6 max-w-xl text-base leading-8 sm:text-lg">
            Warm 18K gold plated pieces made for gifting, stacking, and the everyday moments that deserve to feel exquisite.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso shadow-glint transition hover:-translate-y-0.5 hover:bg-velmora-porcelain focus:outline-none focus:ring-2 focus:ring-velmora-gold focus:ring-offset-2 focus:ring-offset-velmora-espresso"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
