import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div className="absolute inset-0 bg-cover bg-center opacity-80" data-strk-bg-id="velmora-hero-bg-e72c31" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1800" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/35 to-velmora-espresso/80" />
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl animate-rise-in">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">Warm, luminous pieces made for daily rituals, thoughtful gifting, and the quiet pleasure of wearing gold.</p>
          <Link to="/shop" className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition duration-300 hover:bg-velmora-ivory">
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
