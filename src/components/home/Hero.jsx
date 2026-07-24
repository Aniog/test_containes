import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)
  const heroEntry = strkImgConfig['hero-bg-velmora']
  const heroFallback = heroEntry?.results?.find((r) => r.id === heroEntry?.picked)?.url

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: heroFallback ? `url(${heroFallback})` : 'none' }}
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/20 to-velmora-espresso/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-5xl font-medium leading-[1.1] md:text-7xl lg:text-8xl"
        >
          Crafted to be Treasured
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md text-base font-light leading-relaxed text-white/90 md:text-lg"
        >
          Elegant essentials designed for everyday luxury and meaningful gifting.
        </p>
        <Link
          to="/shop"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-md bg-velmora-gold px-10 text-sm font-semibold uppercase tracking-[0.15em] text-velmora-espresso shadow-lg transition-all hover:bg-velmora-gold-dark hover:shadow-xl"
        >
          Shop the Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}
