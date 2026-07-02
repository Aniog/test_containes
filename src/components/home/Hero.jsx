import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0 animate-soft-in bg-velmora-espresso"
        data-strk-bg-id="velmora-hero-bg-c8d4a1"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/40 via-velmora-ink/38 to-velmora-ink/78" />
      <div className="section-shell relative flex min-h-[92vh] items-end pb-16 pt-32 sm:pb-20 lg:items-center lg:pb-0">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widerLuxury text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.92] tracking-tight text-velmora-ivory sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 sm:text-lg">
            Warm, luminous pieces for gifting, self-purchase, and the everyday rituals that deserve a little gold.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop" className="premium-button">
              Shop the Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#story" className="inline-flex items-center justify-center rounded-full border border-velmora-ivory/40 px-7 py-3 text-sm font-semibold uppercase tracking-luxury text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
