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
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7a8b9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-espresso/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight tracking-wide"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-white/80 font-sans font-light max-w-lg mx-auto leading-relaxed"
        >
          Demi-fine gold jewelry designed for the everyday and the unforgettable.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-8 md:mt-10 bg-gold hover:bg-gold-hover text-white font-sans text-xs tracking-product uppercase px-10 py-4 transition-colors duration-200"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
