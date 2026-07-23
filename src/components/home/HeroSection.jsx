import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-cream">
      <span id="hero-image-prompt" className="sr-only">warm-lit close-up of gold jewelry on a model</span>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="home-hero-bg-model-gold-c91a72"
        data-strk-bg="[hero-image-prompt] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/60 via-velmora-ink/38 to-velmora-ink/85" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-tight text-velmora-cream drop-shadow-sm sm:text-7xl md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">
            Warm, heirloom-inspired pieces for everyday rituals, luminous gifting, and the moments you choose for yourself.
          </p>
          <Link to="/shop" className="mt-9 inline-flex bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition duration-300 hover:bg-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-cream focus:ring-offset-2 focus:ring-offset-velmora-ink">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
