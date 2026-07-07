import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Button } from '@/components/ui/Button'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden bg-espresso">
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry model editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cocoa"
      />
      <div className="absolute inset-0 bg-espresso/40" />

      <div className="relative z-10 flex h-full items-end md:items-center">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 md:px-8 lg:px-12 md:pb-0">
          <div className="max-w-xl text-cream">
            <p
              id="hero-subtitle"
              className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-gold-light"
            >
              Demi-Fine Gold Jewelry
            </p>
            <h1
              id="hero-title"
              className="font-serif text-5xl font-medium leading-[1.05] md:text-7xl lg:text-8xl"
            >
              Crafted to be Treasured
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/80 md:text-lg">
              Timeless designs in 18k gold plate, made for the moments that
              matter — and the everyday in between.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/shop" variant="primary" size="lg">
                Shop the Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
