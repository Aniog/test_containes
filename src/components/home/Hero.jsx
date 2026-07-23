import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velmora-ink"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-ink/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight tracking-wide">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-white/80 mt-4 md:mt-6 leading-relaxed max-w-xl mx-auto">
          Demi-fine gold jewelry designed for everyday elegance. Each piece is 18K gold plated, hypoallergenic, and made to last.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-velmora-gold text-white font-sans text-sm tracking-product px-8 py-3 rounded hover:bg-velmora-gold-light transition-colors duration-200"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  )
}
