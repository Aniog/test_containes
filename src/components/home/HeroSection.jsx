import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        data-strk-bg-id="hero-gold-jewelry-model-91a2bc"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/35 to-velmora-espresso/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-refined text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-display text-6xl font-medium leading-[0.92] text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-linen md:text-lg">
            Warm 18K gold-plated pieces made for daily rituals, meaningful gifts, and the quiet luxury of feeling put together.
          </p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-refined text-velmora-espresso shadow-soft transition hover:bg-velmora-champagne">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
