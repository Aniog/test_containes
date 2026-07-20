import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
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
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-espresso"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/20 to-espresso/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-20">
        <p className="text-[11px] uppercase tracking-widest2 text-ivory/80 mb-6 animate-fade-up">
          Demi-Fine 18K Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-ivory text-5xl md:text-7xl leading-[1.05] font-medium animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-champagne">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 text-base md:text-lg text-ivory/85 max-w-xl mx-auto leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Warm, wearable gold — designed for the everyday and the
          unforgettable. Earrings, necklaces and huggies made to last.
        </p>
        <div
          className="mt-9 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-champagne text-ivory hover:bg-champagne-deep transition-colors px-10 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-ivory/40 animate-pulse" />
      </div>
    </section>
  )
}
