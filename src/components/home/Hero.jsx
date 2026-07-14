import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="home-hero-warm-gold-jewelry-model-b61p8x"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/35 to-velmora-ink/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 lg:pb-28">
        <div className="max-w-3xl animate-[fadeUp_900ms_ease-out_both]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] tracking-tight text-velmora-cream md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-cream/82 md:text-lg">Warm, luminous pieces designed for everyday rituals, modern gifting, and the quiet confidence of gold worn close.</p>
          <Link to="/shop" className="mt-9 inline-flex rounded-full bg-velmora-champagne px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition duration-300 hover:bg-velmora-cream hover:text-velmora-ink">Shop the Collection</Link>
        </div>
      </div>
    </section>
  )
}
