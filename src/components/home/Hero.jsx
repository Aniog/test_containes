import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-background-velmora-a1b2c3"
        data-strk-bg="[hero-headline] [hero-sub] luxury gold jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="section-subheading text-cream-200/80 mb-4 animate-fade-in">
          Velmora Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-50 tracking-wide mb-6 animate-slide-up"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-sub"
          className="font-sans text-base md:text-lg text-cream-200/90 max-w-lg mb-10 animate-slide-up"
          style={{ animationDelay: '0.15s' }}
        >
          Demi-fine gold jewelry designed for the modern woman. Elegant enough for special occasions, durable enough for every day.
        </p>
        <Link
          to="/shop"
          className="btn-primary animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
