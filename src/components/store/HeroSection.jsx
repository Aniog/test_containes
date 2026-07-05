import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useStockImages } from '@/hooks/useStockImages'

export default function HeroSection() {
  const containerRef = useStockImages([])

  return (
    <section ref={containerRef} className="relative isolate min-h-[88svh] overflow-hidden bg-velmora-ink text-velmora-soft">
      <div
        className="absolute inset-0"
        data-strk-bg-id="velmora-hero-bg-a1f3d9"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-velmora-fade" />

      <div className="relative mx-auto flex min-h-[88svh] max-w-7xl items-end px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p
            id="hero-kicker"
            className="text-xs font-medium uppercase tracking-velmora text-velmora-soft/90"
          >
            Quiet luxury for every day
          </p>
          <h1
            id="hero-headline"
            className="mt-5 max-w-xl font-display text-5xl leading-tight text-velmora-soft sm:text-6xl lg:text-7xl"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subhead"
            className="mt-6 max-w-lg text-base leading-7 text-velmora-soft/85 sm:text-lg"
          >
            Velmora Fine Jewelry brings warm gold tones, elevated silhouettes, and gift-worthy details to everyday dressing.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-velmora-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink transition hover:-translate-y-0.5 hover:shadow-velmora"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-velmora-soft/75">
              Premium demi-fine jewelry from $30 to $120.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
