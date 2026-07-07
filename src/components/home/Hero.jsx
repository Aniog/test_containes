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
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-velmora-obsidian"
        data-strk-bg-id="hero-bg-main-7f3a2b"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-5">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-headline"
              className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-light text-velmora-text-light leading-[1.1] mb-6"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-manrope text-sm text-velmora-text-light/75 leading-relaxed mb-10 max-w-sm"
            >
              18K gold plated jewelry designed for the modern woman. Wear it every day. Keep it forever.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:bg-velmora-gold-light transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-manrope text-[9px] tracking-widest uppercase text-velmora-text-light">Scroll</span>
        <div className="w-px h-8 bg-velmora-gold/60 animate-pulse" />
      </div>
    </section>
  )
}
