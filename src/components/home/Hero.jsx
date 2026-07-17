import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velvet"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet/70 via-velvet/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest3 uppercase text-sand mb-6">
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-champagne/80 mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who moves through the world with intention.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-10 py-4 bg-gold text-velvet font-sans text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-10 py-4 border border-champagne/50 text-champagne font-sans text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-12 bg-champagne/50 animate-pulse" />
      </div>
    </section>
  )
}
