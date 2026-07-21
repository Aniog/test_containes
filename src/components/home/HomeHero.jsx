import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-ivory/80" style={{ animationDelay: '0.1s' }}>
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up mt-5 font-serif text-5xl font-light leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.2s' }}
        >
          Crafted to be
          <br />
          Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-md text-sm leading-relaxed text-ivory/85 md:text-base"
          style={{ animationDelay: '0.35s' }}
        >
          18K gold plated pieces designed for everyday luxury — quiet, warm,
          and made to be worn and re-worn.
        </p>
        <div className="animate-fade-up mt-9" style={{ animationDelay: '0.5s' }}>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-gold px-10 py-4 text-xs uppercase tracking-widest3 text-ivory transition-all duration-300 hover:bg-gold-deep"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="block h-10 w-px animate-pulse bg-ivory/50" />
      </div>
    </section>
  )
}
