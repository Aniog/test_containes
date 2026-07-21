import {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn model close up editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/25 to-espresso/60" />

      {/* Content */}
      <div className="relative h-full max-w-8xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-28">
        <div className="max-w-2xl animate-fade-up">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-widest3 text-ivory/80 mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-[88px] leading-[1.02] font-medium"
          >
            Crafted to be
            <br />
            <span className="italic text-gold-soft">Treasured</span>
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-ivory/85 text-base md:text-lg max-w-md leading-relaxed"
          >
            Warm 18K gold-plated pieces, designed in studio and made for
            everyday luxury. Hypoallergenic, heirloom-feel, accessible.
          </p>
          <div className="mt-9">
            <Button as={Link} to="/shop" size="lg">
              Shop the Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ivory/60">
        <span className="text-[10px] uppercase tracking-widest3">Scroll</span>
        <span className="w-px h-8 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
