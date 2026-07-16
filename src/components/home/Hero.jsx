import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
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
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="warm gold jewelry on model closeup elegant"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-light mb-4 animate-fade-in">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 animate-fade-in-up">
              Crafted to be<br />Treasured
            </h1>
            <p className="text-cream-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Premium demi-fine jewelry designed for the modern woman. 18K gold plated, hypoallergenic, and crafted with intention.
            </p>
            <Link to="/shop" className="btn-gold inline-block">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-300/60">
        <span className="text-2xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cream-300/40" />
      </div>
    </section>
  )
}
