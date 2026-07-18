import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ImageLoader } from '@/components/layout/ImageLoader'

export function HeroSection() {
  return (
    <ImageLoader className="-mt-[72px] sm:-mt-[84px]" dependencies={[]}>
      <section className="relative isolate overflow-hidden bg-velmora-ink text-velmora-porcelain">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-8c2f1a"
          data-strk-bg="[hero-subhead] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,19,18,0.86)_0%,rgba(22,19,18,0.6)_48%,rgba(22,19,18,0.22)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.38em] text-velmora-champagne">
              Demi-fine jewelry for gifting and self-ritual
            </p>
            <h1 id="hero-title" className="mt-5 font-display text-5xl leading-[0.96] text-velmora-porcelain sm:text-6xl lg:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-lg text-base leading-8 text-velmora-parchment/90 sm:text-lg">
              Warm gold tones, sculptural silhouettes, and thoughtful details designed to feel quietly luxurious every day.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button as="link" href="/shop">
                Shop the Collection
              </Button>
              <a
                href="#bestsellers"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-velmora-parchment transition hover:text-velmora-champagne"
              >
                Discover Bestsellers
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ImageLoader>
  )
}
