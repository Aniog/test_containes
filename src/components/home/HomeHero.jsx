import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-velmora-noir text-velmora-parchment">
      <p id="hero-image-direction" className="sr-only">
        Warm-lit close-up of a woman wearing delicate gold jewelry, editorial beauty portrait, quiet luxury styling, soft neutral background.
      </p>
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="velmora-home-hero-bg"
        data-strk-bg="[hero-image-direction] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-noir via-velmora-noir/70 to-velmora-noir/25" />
      <div className="absolute inset-0 bg-velmora-glow" />
      <div className="container-shell relative flex min-h-screen items-end pb-20 pt-32 md:items-center md:pb-24 md:pt-28">
        <div className="max-w-2xl space-y-8">
          <p className="section-eyebrow text-velmora-parchment/75">Velmora Fine Jewelry</p>
          <div className="space-y-5">
            <h1 id="hero-title" className="font-serif text-6xl leading-none text-white md:text-8xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subtitle" className="max-w-xl text-base leading-8 text-velmora-parchment/82 md:text-lg">
              Quietly luxurious demi-fine gold jewelry designed for self-purchase rituals, meaningful gifting, and everyday polish.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/shop" className="premium-button">
              Shop the Collection
            </Link>
            <Link to="/about" className="premium-button-outline border-white/20 text-white hover:border-velmora-gold hover:text-velmora-gold">
              Discover Velmora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
