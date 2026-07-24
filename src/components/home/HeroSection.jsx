import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-main-7a2f3c"
        data-strk-bg="gold jewelry close-up model warm lighting editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/30 to-charcoal/10" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/70 mb-4 md:mb-6">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-display text-white mb-5 md:mb-6 text-balance">
            Crafted to be Treasured
          </h1>
          <p className="font-sans text-sm md:text-base text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
            Demi-fine 18K gold-plated jewelry, designed for the modern woman.
            Premium quality at an accessible price.
          </p>
          <Link to="/shop" className="btn-accent inline-block">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-10 bg-white/30 mx-auto mb-2" />
        <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 font-sans">
          Scroll
        </span>
      </div>
    </section>
  )
}
