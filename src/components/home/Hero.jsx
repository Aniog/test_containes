import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a2b"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />
      <div className="absolute inset-0 bg-ink/20" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center">
        <p className="animate-fade-up text-[11px] md:text-xs uppercase tracking-[0.4em] text-cream/80 mb-6">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] tracking-tight"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic font-light">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="animate-fade-up mt-6 max-w-xl text-sm md:text-base text-cream/85 leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          Hand-finished 18K gold plated earrings, necklaces, and huggies — designed for the
          everyday and the once-in-a-lifetime.
        </p>
        <div className="animate-fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Button to="/shop" variant="solid">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <span className="h-2 w-px animate-bounce bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
