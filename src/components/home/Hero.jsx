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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl animate-slide-up">
            <p
              id="hero-eyebrow"
              className="font-manrope text-xs tracking-ultra-wide uppercase text-gold-dust mb-6"
            >
              New Collection 2026
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-on-dark leading-[1.05] mb-6"
            >
              Crafted to be<br />
              <em className="italic text-gold-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-on-dark/70 leading-relaxed mb-10 max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-gold-dust text-obsidian font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-deep transition-colors duration-300 font-semibold"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-10 bg-on-dark/50 animate-pulse" />
      </div>
    </section>
  )
}
