import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-stone-950 text-stone-50">
      <span id="hero-image-subject" aria-hidden="true" className="sr-only">
        warm lit close-up of gold jewelry worn on a woman model in an editorial luxury portrait
      </span>
      <span id="hero-image-mood" aria-hidden="true" className="sr-only">
        demi-fine gold earrings and necklace with soft shadow, quiet luxury styling, rich warm tones
      </span>
      <div
        className="absolute inset-0 opacity-90"
        data-strk-bg-id="velmora-hero-bg"
        data-strk-bg="[hero-image-mood] [hero-image-subject] [hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-950/35" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs uppercase tracking-[0.32em] text-amber-200">
            Demi-fine jewelry for modern rituals
          </p>
          <h1 id="hero-title" className="font-display text-5xl leading-tight text-stone-50 sm:text-6xl lg:text-7xl">
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-xl text-base leading-8 text-stone-200 sm:text-lg"
          >
            Warm gold tones, refined silhouettes, and giftable pieces designed to feel elevated every day.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as={Link} className="w-full sm:w-auto" to="/shop">
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              as={Link}
              className="w-full sm:w-auto"
              to="/collections"
              variant="inverse"
            >
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
