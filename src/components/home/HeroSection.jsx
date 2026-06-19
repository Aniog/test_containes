import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8a3f2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-velvet-950/70 via-velvet-950/30 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-10 w-full">
        <div className="max-w-lg">
          <h1
            id="hero-title"
            className="font-serif text-hero-mobile md:text-hero text-white leading-tight animate-slide-up"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="hero-subtitle"
            className="mt-4 text-sm md:text-base text-white/70 leading-relaxed max-w-sm animate-slide-up"
            style={{ animationDelay: '0.15s' }}
          >
            Demi-fine gold jewelry designed for the modern woman — premium materials, honest prices, timeless elegance.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-8 px-8 py-3 border border-gold-500 text-gold-400 text-xs tracking-[0.15em] uppercase font-semibold hover:bg-gold-500 hover:text-white transition-all duration-300 animate-slide-up"
            style={{ animationDelay: '0.3s' }}
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  )
}
