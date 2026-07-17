import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-velmora-8f2a9c"
          data-strk-bg="warm gold jewelry model editorial luxury"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-base/50 via-velmora-base/30 to-velmora-base/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <h1 className="font-serif text-hero text-velmora-white mb-6 tracking-wide">
          Crafted to be<br className="md:hidden" /> Treasured
        </h1>
        <p className="font-sans text-base md:text-lg text-velmora-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
          Demi-fine gold jewelry for the modern woman — designed in London,
          crafted with 18K gold plate, and priced for everyday luxury.
        </p>
        <Link to="/shop" className="btn-accent">
          Shop the Collection
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-velmora-white/50">
        <span className="font-sans text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-velmora-white/30 animate-pulse" />
      </div>
    </section>
  )
}
