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
        className="absolute inset-0 bg-obsidian"
        data-strk-bg-id="hero-bg-velmora-001"
        data-strk-bg="[hero-headline] [hero-subhead]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-obsidian/40 to-obsidian/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-6">NEW COLLECTION 2026</p>
          <h1 id="hero-headline" className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ivory leading-[1.1] mb-6">
            Crafted to be<br /><em className="italic text-gold-light">Treasured</em>
          </h1>
          <p id="hero-subhead" className="font-manrope text-sm md:text-base text-ivory/75 leading-relaxed mb-10 max-w-sm">
            Demi-fine gold jewelry for the woman who wears her story. 18K gold plated, hypoallergenic, made to last.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 bg-gold text-obsidian font-manrope text-xs tracking-widest px-8 py-4 hover:bg-gold-light transition-colors duration-300"
          >
            SHOP THE COLLECTION
            <span className="text-base leading-none">→</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-manrope text-[9px] tracking-widest text-ivory/40">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  )
}
