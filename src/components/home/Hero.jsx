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
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="hero-bg-velmora-8f2a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative flex h-full items-end pb-20 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-white/80">
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl font-medium leading-[1.1] md:text-6xl lg:text-7xl"
            >
              Crafted to be Treasured
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg"
            >
              Timeless silhouettes in 18k gold plate, designed for the everyday
              and the extraordinary.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block bg-velmora-gold px-8 py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
