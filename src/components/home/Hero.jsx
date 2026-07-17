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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-velmora-e1f2g3"
        data-strk-bg="[hero-subtitle] [hero-headline] woman wearing gold jewelry warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <h1
            id="hero-headline"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-white/80 text-base md:text-lg leading-relaxed"
          >
            Demi-fine gold jewelry designed for the modern woman. Timeless pieces that elevate every moment.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 bg-accent text-white px-8 py-3.5 text-sm uppercase tracking-widest font-medium hover:bg-accent-hover transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
