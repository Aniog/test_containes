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
    <section ref={containerRef} className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-velmora-base"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 id="hero-title" className="font-serif text-5xl md:text-7xl lg:text-8xl text-velmora-textOnDark tracking-[0.05em] font-light leading-tight">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="font-sans text-sm md:text-base text-velmora-textMutedOnDark mt-4 md:mt-6 max-w-md tracking-[0.05em]">
          Demi-fine gold jewelry designed for everyday elegance. Each piece tells a story worth wearing.
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 bg-velmora-gold text-velmora-base px-8 py-3 font-sans text-sm uppercase tracking-[0.1em] hover:bg-velmora-goldLight transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
