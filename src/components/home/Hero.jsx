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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/60 to-obsidian/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-xl">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] mb-6" style={{ color: '#C9A96E' }}>
              New Collection
            </p>
            <h1
              id="hero-headline"
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-6"
              style={{ color: '#F5F0E8' }}
            >
              Crafted to be<br />
              <em className="not-italic" style={{ color: '#DFC08A' }}>Treasured</em>
            </h1>
            <p
              id="hero-subhead"
              className="font-sans text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm"
              style={{ color: 'rgba(245,240,232,0.80)' }}
            >
              Demi-fine gold jewelry for the woman who knows her worth. Designed to last, made to be worn every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-block font-sans text-[11px] font-semibold uppercase tracking-widest px-8 py-4 transition-colors duration-300 text-center"
                style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFC08A'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
              >
                Shop the Collection
              </Link>
              <Link
                to="/#story"
                className="inline-block font-sans text-[11px] font-semibold uppercase tracking-widest px-8 py-4 transition-colors duration-300 text-center"
                style={{ border: '1px solid rgba(245,240,232,0.6)', color: '#F5F0E8' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="font-sans text-[9px] uppercase tracking-widest text-parchment">Scroll</span>
        <div className="w-px h-8 bg-parchment/40 animate-pulse" />
      </div>
    </section>
  )
}
