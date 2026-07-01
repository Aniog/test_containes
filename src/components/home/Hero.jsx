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
        data-strk-bg-id="hero-bg-velmora-f8a2b1"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/75 via-obsidian/40 to-obsidian/20" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-xl animate-fadeIn">
            <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-4">
              New Collection — Summer 2026
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ivory font-light leading-tight"
            >
              Crafted to be<br />
              <em className="italic text-champagne-light">Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg text-ivory/70 mt-6 leading-relaxed max-w-sm"
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to last, made to be worn every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/shop"
                className="inline-block bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest px-10 py-4 hover:bg-champagne-dark transition-colors duration-200 text-center"
              >
                Shop the Collection
              </Link>
              <Link
                to="/about"
                className="inline-block border border-ivory/40 text-ivory font-sans text-xs uppercase tracking-widest px-10 py-4 hover:border-champagne hover:text-champagne transition-colors duration-200 text-center"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[10px] uppercase tracking-widest text-ivory">Scroll</span>
        <div className="w-px h-8 bg-champagne/60 animate-pulse" />
      </div>
    </section>
  )
}
