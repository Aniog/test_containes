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
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-velmora-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-obsidian/60 via-obsidian/30 to-obsidian/70" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="font-sans text-xs tracking-widest uppercase text-gold-muted mb-6 opacity-90">
          New Collection — Summer 2026
        </p>
        <h1
          id="hero-headline"
          className="font-serif font-light text-4xl md:text-6xl lg:text-7xl text-cream leading-tight tracking-wide max-w-3xl"
        >
          Crafted to be<br />
          <em className="not-italic text-gold-light">Treasured</em>
        </h1>
        <p
          id="hero-subhead"
          className="font-sans text-sm md:text-base text-cream/80 mt-6 max-w-md leading-relaxed tracking-wide"
        >
          Demi-fine gold jewelry for the woman who knows her worth.
          18K gold plated. Hypoallergenic. Made to last.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-gold text-cream font-sans text-xs tracking-widest uppercase px-10 py-4 hover:bg-gold-light transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-cream/30 animate-pulse" />
      </div>
    </section>
  )
}
