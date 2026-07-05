import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] md:h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-heading] [hero-subtitle]"
        data-strk-bg-ratio="3x2"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velvet-900"
      />
      {/* Fallback image while stock image loads */}
      <img
        src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 30%' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="max-w-xl animate-fade-in-up">
          <p className="text-gold-light text-xs uppercase tracking-[0.15em] mb-4 font-medium">
            Demi-Fine Jewelry
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight font-light"
          >
            Crafted to be<br />Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="text-velvet-200 text-sm md:text-base mt-4 max-w-md leading-relaxed font-light"
          >
            Hand-finished pieces designed for the woman who values quality, 
            craftsmanship, and understated elegance — at an accessible price.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center mt-8 bg-gold text-white px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-dark transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}