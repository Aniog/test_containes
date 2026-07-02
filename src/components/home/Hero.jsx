import { useRef, useEffect } from 'react'
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
        className="absolute inset-0 bg-espresso"
        data-strk-bg-id="hero-bg-vel-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1
          id="hero-title"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 text-base md:text-lg font-light max-w-xl mx-auto"
        >
          Demi-fine gold jewelry designed for the modern woman. Timeless elegance, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 px-10 py-4 bg-gold/90 text-cream text-sm uppercase tracking-widest font-medium hover:bg-gold transition-colors no-underline border border-gold-light"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
