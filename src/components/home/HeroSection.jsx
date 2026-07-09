import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="gold jewelry on model closeup warm lighting elegant editorial portrait"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-brand-charcoal"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/30 to-brand-charcoal/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-end pb-20 md:pb-28 px-6 text-center">
        <p className="font-sans text-[0.65rem] md:text-xs tracking-[0.3em] uppercase text-brand-gold mb-4 animate-fade-in">
          Demi-Fine Gold Jewelry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-display text-brand-ivory tracking-[-0.02em] max-w-3xl text-balance animate-slide-up">
          Crafted to be Treasured
        </h1>
        <p className="font-sans text-sm md:text-base text-brand-ivory/70 mt-4 max-w-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Premium 18K gold plated jewelry, designed for everyday elegance. 
          Hypoallergenic, timeless, and made to last.
        </p>
        <Link
          to="/shop"
          className="btn-gold mt-8 text-xs animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
