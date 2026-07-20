import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="home-hero-bg-f91b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/35 via-velmora-espresso/45 to-velmora-espresso/78" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.95] tracking-[-0.03em] text-velmora-cream md:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-lg leading-8 text-velmora-cream/85 md:text-xl">
            Warm, luminous pieces made for daily rituals, self-gifting, and the moments you want to remember.
          </p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-cream">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
