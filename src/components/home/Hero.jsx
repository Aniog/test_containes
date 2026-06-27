import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[650px] max-h-[900px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title] Velmora Fine Jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end pb-24 md:pb-32 h-full text-center px-6">
        <h1
          id="hero-title"
          className="font-serif text-[38px] md:text-[56px] lg:text-[64px] font-semibold text-warm-white leading-[1.1] tracking-[0.02em] max-w-[600px]"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-base md:text-lg text-gold-light/90 font-light tracking-[0.04em] max-w-[460px]"
        >
          Demi-fine gold jewelry for the moments that matter — and the ones in between.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-block border-2 border-gold text-gold hover:bg-gold hover:text-espresso px-10 py-3.5 text-sm tracking-[0.12em] uppercase font-medium transition-all duration-500"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] uppercase text-warm-white/60">Scroll</span>
        <div className="w-[1px] h-8 bg-gold/40" />
      </div>
    </section>
  )
}
