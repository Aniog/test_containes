import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn model warm light"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-5">
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.02] font-light"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            Warm-lit, hand-finished gold — designed for the everyday and the
            unforgettable. Worn close, kept forever.
          </p>
          <div className="mt-9">
            <Button as={Link} to="/shop" size="lg" variant="primary">
              Shop the Collection
            </Button>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/70">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="w-px h-10 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
