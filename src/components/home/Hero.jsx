import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-champagne animate-fade-up">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] text-cream animate-fade-up md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-sm leading-relaxed text-cream/80 animate-fade-up md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Warm-lit, hand-finished gold jewelry made for everyday wear and the
          moments worth marking.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-9 py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-gold-soft"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
