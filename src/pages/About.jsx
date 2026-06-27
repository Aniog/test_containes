import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function About() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-2c9f5a"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] gold jewelry atelier studio warm"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-velmora-ink/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl text-velmora-cream md:text-6xl"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 max-w-md text-sm text-velmora-cream/80"
          >
            Quiet luxury, crafted to be lived in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
          The Velmora Philosophy
        </p>
        <h2 className="mt-4 font-serif text-3xl text-velmora-ink md:text-4xl">
          Fine Gold, For Every Day
        </h2>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-velmora-stone md:text-base">
          <p>
            Velmora was founded on a simple conviction: that beautiful gold
            jewelry should not be reserved for rare occasions. We design
            demi-fine pieces in 18K gold plating — warm enough to feel like an
            heirloom, durable enough for the everyday.
          </p>
          <p>
            Every piece is hypoallergenic, nickel-free, and ethically made. We
            believe in accessible luxury without compromise: thoughtful design,
            honest materials, and a price that respects the woman who wears it.
          </p>
          <p>
            From the studio to your jewelry box, each Velmora piece is crafted
            to be treasured — not for a season, but for years.
          </p>
        </div>
        <Link
          to="/shop"
          className="mt-10 inline-block bg-velmora-gold px-10 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-velmora-gold-deep"
        >
          Explore the Collection
        </Link>
      </section>
    </div>
  )
}
