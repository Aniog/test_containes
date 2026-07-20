import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-ink text-velmora-ivory">
      <div
        className="absolute inset-0 scale-105 opacity-80"
        data-strk-bg-id="hero-jewelry-model-closeup-f6a91d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/45 via-velmora-ink/35 to-velmora-ink/80" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-velmora-ink/80 via-velmora-ink/30 to-transparent" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 lg:pb-24">
        <div className="max-w-3xl animate-[fadeUp_900ms_ease-out_both]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widestLuxury text-velmora-champagne">
            Demi-fine gold jewelry
          </p>
          <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.9] text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-7 max-w-xl text-base leading-8 text-velmora-sand md:text-lg">
            Warm, luminous essentials designed for self-purchase, meaningful gifting,
            and every quiet moment that deserves gold.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-3 bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-widest text-velmora-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-gold"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center border border-velmora-ivory/45 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-velmora-ivory transition hover:border-velmora-champagne hover:text-velmora-champagne"
            >
              View Bestsellers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
