import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 opacity-75"
        data-strk-bg-id="home-hero-bg-velmora"
        data-strk-bg="[home-hero-subtitle] [home-hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/35 to-velmora-espresso/85" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-rose">Demi-fine gold jewelry</p>
          <h1 id="home-hero-title" className="font-serif text-6xl font-semibold leading-[0.9] text-balance text-velmora-ivory md:text-8xl lg:text-9xl">Crafted to be Treasured</h1>
          <p id="home-hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-parchment md:text-lg">Warm, luminous pieces for everyday rituals, meaningful gifts, and the quiet confidence of wearing gold your way.</p>
          <Link to="/shop" className="velmora-focus mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-soft transition hover:bg-velmora-ivory">
            Shop the Collection
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
