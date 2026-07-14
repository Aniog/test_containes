import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-obsidian/80 via-obsidian/50 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4 font-medium">
              New Collection 2024
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-tight"
            >
              Crafted to be<br />
              <em className="italic">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-ivory-muted mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-gold-light transition-all duration-300"
              >
                Shop the Collection
              </Link>
              <Link
                to="/#about"
                className="inline-flex items-center justify-center border border-ivory/40 text-ivory font-sans text-xs tracking-widest uppercase font-medium px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-sans text-xs tracking-widest uppercase text-ivory-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory-muted to-transparent" />
      </div>
    </section>
  )
}
