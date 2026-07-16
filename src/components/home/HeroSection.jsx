import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-k4d9f2"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,21,19,0.84)_0%,rgba(27,21,19,0.58)_45%,rgba(27,21,19,0.25)_100%)]" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 md:items-center lg:px-8">
        <div className="max-w-xl">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-velmora-gold">
            Demi-Fine Jewelry for Every Day Rituals
          </p>
          <h1 id="hero-headline" className="font-heading text-5xl leading-[0.95] text-velmora-ivory sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-lg text-base leading-8 text-velmora-ivory/78 sm:text-lg">
            Warm gold silhouettes designed for self-purchase, gifting, and the small ceremonies of getting dressed well.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/shop">
              <Button size="lg" className="bg-velmora-gold text-velmora-ink hover:bg-velmora-rose">
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/#story">
              <Button variant="light" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
