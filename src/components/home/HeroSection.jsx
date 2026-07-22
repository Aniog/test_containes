import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="gold jewelry model close-up warm light luxury editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-charcoal/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] mb-6">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-cream/80 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
          Demi-fine 18K gold jewelry designed for the modern woman. 
          Premium quality, accessible luxury — pieces you'll reach for every day.
        </p>
        <Link to="/collection">
          <button className="btn-gold">
            Shop the Collection
          </button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream/50 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-8 bg-cream/30" />
      </div>
    </section>
  )
}
