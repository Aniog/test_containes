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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          id="hero-title"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream font-light tracking-wide leading-tight animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="font-sans text-sm md:text-base text-stone-300 mt-4 md:mt-6 max-w-lg tracking-wide animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Demi-fine gold jewelry for the modern woman. Elegant, accessible, made to last.
        </p>
        <Link
          to="/shop"
          className="btn-primary mt-8 md:mt-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default Hero
