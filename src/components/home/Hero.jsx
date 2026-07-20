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
    <section ref={containerRef} className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="gold jewelry warm lighting model portrait editorial luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/70 via-charcoal-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 w-full">
        <div className="max-w-xl">
          <p className="font-sans text-xs tracking-super-wide uppercase text-gold-300 mb-4 animate-fade-in">
            Demi-Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-cream-50 leading-[1.1] mb-6 animate-slide-up">
            Crafted to be{' '}
            <span className="italic text-gold-300">Treasured</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-cream-200 leading-relaxed mb-8 max-w-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            18K gold-plated jewelry designed for the modern woman. Elegant enough for special occasions, durable enough for every day.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a href="/shop" className="btn-gold">
              Shop the Collection
            </a>
            <a href="/#bestsellers" className="btn-outline border-cream-200 text-cream-100 hover:bg-cream-50 hover:text-charcoal-800">
              View Bestsellers
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-cream-200/40" />
      </div>
    </section>
  )
}
