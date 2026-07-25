import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative flex min-h-[92vh] items-end overflow-hidden sm:min-h-screen sm:items-center">
      <div className="absolute inset-0 bg-ink">
        <img
          data-strk-img-id="hero-main-c1a2b3"
          data-strk-img="warm-lit close-up of gold jewelry on a model's neck and ear, elegant woman wearing layered gold necklaces and earrings, dark moody editorial photography, luxury campaign"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Model wearing layered Velmora gold jewelry in warm light"
          className="h-full w-full object-cover opacity-90"
          loading="eager"
          fetchpriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20 sm:bg-gradient-to-r sm:from-ink/80 sm:via-ink/35 sm:to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:py-40 lg:px-12">
        <div className="max-w-2xl">
          <p className="animate-fade-up mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-luxe text-gold">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Demi-Fine Jewelry · Est. 2021
          </p>
          <h1
            className="animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Crafted to be
            <br />
            <em className="font-medium italic text-gold">Treasured</em>
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base"
            style={{ animationDelay: '240ms' }}
          >
            Warm 18K gold, hand-finished in small batches. Everyday pieces with
            heirloom presence — made for gifting, and for keeping.
          </p>
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '360ms' }}
          >
            <Link to="/shop">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline-light" size="lg">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-luxe text-cream/60">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
