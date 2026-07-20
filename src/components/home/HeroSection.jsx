import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-velmora-espresso bg-cover bg-center"
        style={{ backgroundImage: "url('/images/velmora-hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/85 via-velmora-ink/45 to-velmora-ink/10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-velmora-espresso to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <p id="hero-kicker" className="mb-5 text-xs font-semibold uppercase tracking-ui text-velmora-gold">
            Demi-fine jewelry for everyday heirlooms
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-sand sm:text-lg">
            Warm gold, luminous crystals, and sculptural silhouettes designed for self-purchase, modern gifting, and every quiet ritual in between.
          </p>
          <Link
            to="/shop"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-sm font-semibold uppercase tracking-ui text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-champagne"
          >
            Shop the Collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
