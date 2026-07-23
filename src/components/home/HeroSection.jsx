import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-espresso text-velmora-pearl">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-a8f2c1"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-kicker]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/35 to-velmora-espresso/85" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-velmora-porcelain to-transparent" />
      <div className="velmora-container relative flex min-h-screen items-end pb-24 pt-32 md:items-center md:pb-0">
        <div className="max-w-3xl animate-fade-up">
          <p id="hero-kicker" className="eyebrow text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="serif-display mt-5 max-w-3xl text-6xl text-velmora-pearl sm:text-7xl md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-mist sm:text-lg">
            Warm, luminous pieces for everyday rituals and unforgettable gifting — designed in 18K gold plating with hypoallergenic finishes.
          </p>
          <Link to="/shop" className="btn-primary mt-9">Shop the Collection</Link>
        </div>
      </div>
    </section>
  )
}
