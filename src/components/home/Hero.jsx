import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 id="hero-title" className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wider animate-fade-in">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-base md:text-lg text-white/80 mt-4 md:mt-6 max-w-xl animate-slide-up">
          Demi-fine gold jewelry for everyday elegance. 18K gold plated, hypoallergenic, designed to last.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 accent-button px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-none animate-slide-up"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
