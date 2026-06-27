import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-7a3f9c"
        data-strk-bg="[hero-subtitle] [hero-title] gold jewelry worn on model warm editorial"
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-espresso"
      />
      {/* Warm gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-espresso/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-end px-6 pb-20 text-center md:justify-center md:pb-0 md:px-10">
        <p className="mb-5 animate-fade-up text-xs uppercase tracking-[0.4em] text-gold">
          Demi-Fine Gold Jewelry
        </p>
        <h1
          id="hero-title"
          className="animate-fade-up font-serif text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.1s' }}
        >
          Crafted to be
          <br />
          <span className="italic text-gold-soft">Treasured</span>
        </h1>
        <p
          id="hero-subtitle"
          className="mt-6 max-w-md animate-fade-up text-base leading-relaxed text-ivory-muted md:text-lg"
          style={{ animationDelay: '0.2s' }}
        >
          18K gold plated pieces designed for the everyday and the
          unforgettable. Hypoallergenic, tarnish-resistant, made to last.
        </p>
        <div style={{ animationDelay: '0.3s' }} className="mt-9 animate-fade-up">
          <Link
            to="/shop"
            className="inline-block bg-gold px-10 py-4 text-xs uppercase tracking-[0.2em] text-espresso transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_8px_30px_rgba(201,162,75,0.3)]"
          >
            Shop the Collection
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory-muted">
          Scroll
        </span>
        <span className="h-10 w-px animate-pulse bg-gold/50" />
      </div>
    </section>
  )
}
