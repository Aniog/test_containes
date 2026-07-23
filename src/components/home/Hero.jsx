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
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-dark"
        data-strk-bg-id="hero-bg-velmora-q8r9s0"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-charcoal/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1
          id="hero-headline"
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-white/80 text-base md:text-lg font-sans font-light max-w-xl mx-auto mb-10"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless pieces that elevate every moment.
        </p>
        <Link
          to="/shop"
          className="inline-block px-10 py-4 bg-accent text-cream text-sm uppercase tracking-widest no-underline hover:bg-accent-hover transition-colors"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
