import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <img
        data-strk-img-id="hero-img-velmora"
        data-strk-img="[hero-headline] [hero-subhead] velmora fine jewelry gold"
        data-strk-img-ratio="16x9"
        data-strk-img-width="1600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt="Velmora Fine Jewelry"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/20 to-espresso/50" />

      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-gold-light">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-headline"
          className="max-w-4xl font-serif text-5xl font-light leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subhead"
          className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/90 md:text-lg"
        >
          Elevated essentials for everyday luxury. Designed for women who move
          through the world with quiet confidence.
        </p>
        <Link
          to="/shop"
          className="mt-10 bg-gold px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-espresso"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}
