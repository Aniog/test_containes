import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title] warm gold jewelry worn on model editorial close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-bg/40 via-espresso-bg/20 to-espresso-bg/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-cream/80 text-xs tracking-[0.4em] uppercase mb-6 animate-[fadeIn_1s_ease-out]">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="font-serif text-cream text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl animate-[fadeIn_1.2s_ease-out]"
        >
          Crafted to be
          <br />
          <em className="italic font-normal">Treasured</em>
        </h1>
        <p
          id="hero-subtitle"
          className="text-cream/80 text-base md:text-lg mt-8 max-w-md leading-relaxed animate-[fadeIn_1.4s_ease-out]"
        >
          Warm-lit gold, made for everyday wear. Designed in-house, crafted to last.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-gold text-cream px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold-deep transition-colors duration-300 animate-[fadeIn_1.6s_ease-out]"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
