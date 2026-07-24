import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
      setIsLoaded(true)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-[70vh] sm:h-[80vh] md:h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 md:px-4 max-w-3xl mx-auto">
        <h1
          id="hero-title"
          className="serif-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 tracking-wide leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-light tracking-wide text-white/90 max-w-xl mx-auto"
        >
          Demi-fine gold jewelry for the modern woman. Timeless pieces that celebrate your everyday elegance.
        </p>
        <Link to="/shop" className="inline-block bg-white/90 text-foreground px-8 py-3.5 md:px-10 md:py-4 text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all duration-300">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
