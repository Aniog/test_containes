import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
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
    <section ref={containerRef} className="relative h-[85vh] sm:h-screen overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-headline] [hero-subtitle] warm gold jewelry editorial model luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-stone-800"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold-light text-[11px] sm:text-xs font-medium tracking-widest-2xl uppercase mb-4 sm:mb-6">
          Demi-Fine Jewelry
        </p>
        <h1
          id="hero-headline"
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] max-w-3xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 max-w-lg leading-relaxed"
        >
          18K gold-plated pieces designed for the modern woman. 
          Everyday luxury that lasts.
        </p>
        <Link
          to="/shop"
          className="mt-8 sm:mt-10 inline-flex items-center px-8 sm:px-10 py-3.5 sm:py-4 bg-gold text-white text-[13px] font-medium tracking-widest-xl uppercase hover:bg-gold-dark transition-colors duration-300 rounded-sm"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/50 tracking-widest-2xl uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
