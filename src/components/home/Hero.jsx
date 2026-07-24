import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Button from '@/components/ui/Button'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'

export default function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <img
        alt="Gold jewelry worn by a model in warm light"
        className="absolute inset-0 h-full w-full object-cover"
        data-strk-img-id="hero-main-1a2b3c"
        data-strk-img="[hero-subtitle] [hero-headline] gold jewelry worn on model warm editorial"
        data-strk-img-ratio="9x16"
        data-strk-img-width="1600"
        src={getStrkImageUrl('hero-main-1a2b3c')}
      />
      {/* Warm overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1
          id="hero-headline"
          className="fade-up font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Crafted to be
          <br />
          <span className="italic text-champagne">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up mt-6 max-w-md text-sm leading-relaxed text-cream/85 md:text-base"
          style={{ animationDelay: '0.15s' }}
        >
          Demi-fine gold jewelry, designed in studio and made to be worn every
          single day. Quietly luxurious, endlessly wearable.
        </p>
        <div className="fade-up mt-9" style={{ animationDelay: '0.3s' }}>
          <Button as={Link} to="/shop" variant="primary" size="lg">
            Shop the Collection
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="block h-10 w-px animate-pulse bg-cream/50" />
      </div>
    </section>
  )
}
