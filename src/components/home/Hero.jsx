import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center section-padding">
        <div className="max-w-3xl animate-fade-in">
          <p className="caption text-gold-light mb-4 tracking-mega-wide">
            Velmora Fine Jewelry
          </p>

          <h1
            id="hero-title"
            className="heading-xl text-cream-100 mb-6"
          >
            Crafted to be Treasured
          </h1>

          <p
            id="hero-subtitle"
            className="body-lg text-cream-200/90 max-w-xl mx-auto mb-10 text-balance"
          >
            Premium demi-fine jewelry designed for the modern woman. 
            18K gold plated, hypoallergenic, and made to last.
          </p>

          <Link to="/collection" className="btn-gold">
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-cream-300/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-cream-300/60 to-transparent" />
      </div>
    </section>
  )
}
