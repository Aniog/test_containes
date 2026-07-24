import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center md:px-10">
        <p className="fade-up text-[11px] uppercase tracking-widest2 text-cream/80">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-4 font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
        >
          Warm-lit, hand-finished gold jewelry made for the everyday and the once-in-a-lifetime.
        </p>
        <Link
          to="/shop"
          className="fade-up mt-10 bg-gold px-10 py-4 text-[11px] uppercase tracking-widest3 text-ink transition-colors hover:bg-gold-deep hover:text-cream"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
