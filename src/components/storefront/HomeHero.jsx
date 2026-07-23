import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomeHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink text-mist">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8c3f2a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="section-shell relative flex min-h-[88vh] items-end py-16 pb-14 pt-36 sm:pb-20 sm:pt-44">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Quiet luxury for everyday rituals</p>
          <h1 id="hero-title" className="mt-5 font-serif text-5xl leading-[0.92] text-surface sm:text-6xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-mist/80 sm:text-lg">
            Warm-lit demi-fine jewelry designed for gifting, self-purchase, and the kind of polish you reach for every day.
          </p>
          <div className="mt-8">
            <Link to="/shop" className="premium-button min-h-14 gap-3 px-8">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
