import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-brand-charcoal"
        data-strk-bg-id="hero-bg-velmora-9f3a2b"
        data-strk-bg="[hero-subtitle] [hero-headline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-2xl">
        <h1
          id="hero-headline"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-4 md:mt-6 text-white/80 font-sans text-sm md:text-base tracking-wide"
        >
          Demi-fine gold jewelry designed for everyday elegance
        </p>
        <Link
          to="/shop"
          className="mt-8 md:mt-10 inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-white font-sans text-xs tracking-widest uppercase no-underline hover:bg-brand-gold-dark transition-colors duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
