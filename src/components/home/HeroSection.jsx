import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 bg-velmora-espresso bg-cover bg-center opacity-80"
        data-strk-bg-id="velmora-hero-model-bg-a6f91d"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink via-velmora-ink/35 to-velmora-ink/15" />
      <span id="hero-image-context" className="sr-only">Warm-lit close-up of gold jewelry worn on a model, quiet luxury editorial portrait</span>
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28">
        <div className="max-w-3xl animate-fadeUp">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serifDisplay text-6xl font-light leading-[0.95] text-velmora-cream sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-cream/82 sm:text-lg">Warm, luminous pieces designed for everyday rituals, meaningful gifts, and the quiet confidence of gold.</p>
          <Link to="/shop" className="mt-9 inline-flex bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-antique hover:text-velmora-cream">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
