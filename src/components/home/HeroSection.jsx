import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <section ref={heroRef} className="relative flex min-h-[92vh] items-end overflow-hidden bg-velmora-espresso text-velmora-cream">
      <div
        className="absolute inset-0 scale-105 bg-velmora-espresso opacity-80"
        data-strk-bg-id="velmora-hero-bg-quiet-luxury"
        data-strk-bg="[hero-image-context] [hero-subtitle] [hero-title] [hero-brand-context]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-velmora-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-velmora-espresso via-velmora-espresso/78 to-velmora-espresso/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/85 via-transparent to-velmora-espresso/35" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-velmora-ivory to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pb-28">
        <p id="hero-image-context" className="sr-only">warm-lit close-up of fine gold jewelry on a woman model editorial portrait</p>
        <p id="hero-brand-context" className="mb-5 text-xs font-extrabold uppercase tracking-[0.34em] text-velmora-champagne drop-shadow-sm">
          Demi-fine gold jewelry, directly from our atelier
        </p>
        <h1 id="hero-title" className="max-w-4xl font-serif text-6xl font-medium leading-[0.9] text-velmora-cream drop-shadow-[0_3px_24px_rgba(36,25,21,0.55)] sm:text-7xl lg:text-8xl">
          Crafted to be Treasured
        </h1>
        <p id="hero-subtitle" className="mt-6 max-w-xl text-base font-medium leading-8 text-velmora-cream drop-shadow-[0_2px_18px_rgba(36,25,21,0.75)] sm:text-lg">
          Warm gold essentials made for everyday rituals, meaningful gifts, and the kind of shine that never asks for attention.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex items-center gap-3 bg-velmora-champagne px-6 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-soft transition hover:-translate-y-0.5 hover:bg-velmora-cream focus:outline-none focus:ring-2 focus:ring-velmora-cream"
        >
          Shop the Collection
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
