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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-main-9f3a2c"
        data-strk-bg="[hero-subhead] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-velmora-obsidian/70 via-velmora-obsidian/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-xl">
          <p
            id="hero-eyebrow"
            className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-6 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            New Collection 2026
          </p>
          <h1
            id="hero-headline"
            className="font-cormorant text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Crafted to be<br />
            <em className="italic">Treasured</em>
          </h1>
          <p
            id="hero-subhead"
            className="font-manrope text-sm text-white/70 leading-relaxed mb-10 max-w-sm animate-fadeIn"
            style={{ animationDelay: '0.35s' }}
          >
            Demi-fine gold jewelry for the woman who knows her worth. 18K gold plated, hypoallergenic, made to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/shop"
              className="inline-block bg-velmora-gold text-white font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-velmora-gold-dark transition-colors duration-300 text-center"
            >
              Shop the Collection
            </Link>
            <Link
              to="/#about"
              className="inline-block border border-white/40 text-white font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:border-white hover:bg-white/10 transition-all duration-300 text-center"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
