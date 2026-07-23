import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-onyx text-velmora-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        data-strk-bg-id="velmora-hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-onyx/45 via-velmora-onyx/30 to-velmora-onyx/80" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-velmora-champagne">Demi-fine gold jewelry, direct to you</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] tracking-tight text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-mist md:text-lg">
            Warm, refined pieces for everyday ritual, meaningful gifting, and the quiet glow of self-purchase.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-onyx transition hover:bg-velmora-champagne focus:outline-none focus:ring-2 focus:ring-velmora-ivory"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
