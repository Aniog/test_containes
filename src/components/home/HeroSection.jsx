import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="warm gold jewelry on model close-up elegant editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-taupe to-charcoal" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <p className="text-caption uppercase tracking-mega-wide text-gold-light mb-4">
          Demi-Fine Jewelry
        </p>
        <h1 className="font-serif text-display text-cream mb-6">
          Crafted to be Treasured
        </h1>
        <p className="text-body-lg text-cream/80 max-w-lg mx-auto mb-10 leading-relaxed">
          Timeless 18K gold-plated pieces designed for the modern woman.
          Premium quality, accessible luxury.
        </p>
        <Link
          to="/shop"
          className="btn-gold inline-block"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-20" />
    </section>
  )
}
