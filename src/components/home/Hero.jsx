import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Warm overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/55" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-20 md:pb-28">
        <div className="max-w-2xl fade-up">
          <p
            id="hero-eyebrow"
            className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-5"
          >
            Demi-Fine Gold Jewelry
          </p>
          <h1
            id="hero-title"
            className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
          >
            Crafted to be
            <br />
            Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-base md:text-lg text-ivory/85 max-w-md leading-relaxed"
          >
            Warm 18K gold plated pieces, hypoallergenic and made for everyday
            wear. Quietly luxurious, endlessly wearable.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-gold text-ivory text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-gold-deep transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
