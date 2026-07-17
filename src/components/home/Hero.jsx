import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-[11px] uppercase tracking-[0.35em] text-ivory/80 mb-6 animate-fade-up">
          Demi-Fine 18K Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] max-w-4xl animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-xl text-base md:text-lg text-ivory/85 font-light leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Warm-lit, hand-finished gold jewelry made for the everyday and the unforgettable.
        </p>
        <div className="mt-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button as={Link} to="/shop" variant="primary" size="lg">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Scroll</span>
          <div className="h-10 w-px bg-ivory/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
