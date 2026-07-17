import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-velmora-ink pt-24 text-velmora-parchment">
      <div
        className="absolute inset-0 opacity-80"
        data-strk-bg-id="hero-bg-velmora-2f8a1b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-ink via-velmora-ink/75 to-velmora-ink/25" />
      <div className="relative section-shell flex min-h-[92vh] items-end pb-16 pt-12 md:items-center md:pb-20">
        <div className="section-frame grid gap-10 lg:max-w-5xl">
          <div className="max-w-2xl space-y-6">
            <p
              className="text-xs uppercase tracking-luxe text-velmora-champagne"
              id="hero-subhead"
            >
              Warm-lit demi-fine jewelry for every treasured day
            </p>
            <h1
              id="hero-headline"
              className="font-display text-5xl leading-[0.88] text-velmora-parchment sm:text-6xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p className="max-w-xl text-base leading-8 text-velmora-parchment/80 md:text-lg">
              Discover quietly luxurious earrings, necklaces, and huggies designed for gifting, collecting, and the elegance of everyday wear.
            </p>
            <Link to="/shop" className="button-primary inline-flex gap-3">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
