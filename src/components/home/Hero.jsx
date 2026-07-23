import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-1a"
        data-strk-bg="[hero-subtitle] [hero-title] warm lit close up gold jewelry worn on model editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-5 text-center md:px-8">
        <p className="fade-up text-[11px] uppercase tracking-widest2 text-cream/80">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-title"
          className="fade-up mt-5 font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
          style={{ animationDelay: '0.2s' }}
        >
          Demi-fine gold jewelry, designed in the studio and made to be worn
          every day. Quietly luxurious, endlessly wearable.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Link
            to="/shop"
            className="inline-flex items-center bg-gold px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-gold-deep hover:text-cream"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </div>
      </div>
    </section>
  )
}
