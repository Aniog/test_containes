import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'

export default function BrandStory() {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <section ref={ref} className="bg-sand">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 md:grid-cols-2">
        {/* Image left */}
        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
          <img
            alt="Velmora jewelry craftsmanship in the studio"
            className="absolute inset-0 h-full w-full object-cover"
            data-strk-img-id="story-img-8d3e1f"
            data-strk-img="[story-body] [story-title] jewelry craftsmanship studio gold warm"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src={getStrkImageUrl('story-img-8d3e1f')}
          />
        </div>

        {/* Text right */}
        <div className="px-8 py-16 md:px-16 md:py-24">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">Our Story</p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl"
          >
            Made by hand,
            <br />
            <span className="italic">made to last.</span>
          </h2>
          <p id="story-body" className="mt-6 max-w-md text-sm leading-relaxed text-stone">
            Velmora began with a simple belief: fine jewelry should be lived in,
            not locked away. Each piece is crafted from 18K gold-plated brass,
            finished by hand, and tested for everyday wear — so you can treasure
            it from the first wear to the thousandth.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
