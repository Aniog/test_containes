import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8d91ac"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink/85 via-velmora-ink/45 to-velmora-ink/25" />
      <div className="page-shell relative flex min-h-[92vh] items-end py-24 pb-16 pt-32 md:pb-24">
        <div className="max-w-2xl text-velmora-cream">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-velmora-goldSoft">Velmora Fine Jewelry</p>
          <h1 id="hero-title" className="font-display text-6xl leading-[0.92] text-velmora-cream sm:text-7xl lg:text-[6.5rem]">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-7 text-velmora-cream/85 sm:text-lg">
            Premium demi-fine pieces with warm gold finishes, refined sparkle, and an effortless gifting feel.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/shop">
              <Button>Shop the Collection</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" className="border-velmora-cream/35 bg-velmora-cream/10 text-velmora-cream backdrop-blur hover:border-velmora-gold hover:bg-velmora-gold hover:text-velmora-cream">
                Discover Velmora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
