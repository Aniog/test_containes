import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/button'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]"
        data-strk-bg-id="hero-bg-main"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-0 md:pt-20">
          <div className="max-w-xl">
            <p className="text-gold text-xs tracking-widest uppercase font-sans mb-4" id="hero-subtitle">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6" id="hero-title">
              Crafted to be Treasured
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-md mb-8 font-sans leading-relaxed">
              Demi-fine gold jewelry, thoughtfully designed for the woman who values quality, elegance, and timeless style.
            </p>
            <Link to="/collection">
              <Button variant="primary" size="lg">
                Shop the Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}