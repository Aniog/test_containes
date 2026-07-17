import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-pearl">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-70"
        data-strk-bg-id="velmora-hero-bg-9f4a21"
        data-strk-bg="[hero-image-brief] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso/90 via-velmora-espresso/55 to-velmora-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/35 via-transparent to-velmora-espresso/80" />
      <span id="hero-image-brief" className="sr-only">warm lit close up of gold jewelry on a woman model neck ear editorial luxury fine jewelry</span>
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <div className="max-w-3xl animate-velmora-fade-up">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">
            Demi-fine gold jewelry
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-[-0.03em] text-velmora-pearl drop-shadow-sm sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-pearl drop-shadow-sm sm:text-lg">
            Warm gold essentials, luminous crystal accents, and gift-ready pieces designed for everyday rituals and unforgettable moments.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-champagne px-7 py-4 text-xs font-black uppercase tracking-[0.24em] text-velmora-espresso shadow-velmora-glow transition duration-300 hover:-translate-y-0.5 hover:bg-velmora-pearl"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
