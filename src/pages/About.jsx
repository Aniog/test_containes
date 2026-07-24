import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PLACEHOLDER } from '@/components/ui/StrkImage'
import { getStrkImageUrl } from '@/lib/utils'
import TrustBar from '@/components/home/TrustBar'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <div ref={ref} className="pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          alt="Velmora studio craftsmanship"
          className="absolute inset-0 h-full w-full object-cover"
          data-strk-img-id="about-hero-2b3c4d"
          data-strk-img="[about-intro] [about-title] jewelry studio craftsmanship warm gold"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src={getStrkImageUrl('about-hero-2b3c4d')}
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
          <h1 id="about-title" className="font-serif text-5xl text-cream md:text-6xl">
            Our Story
          </h1>
          <p id="about-intro" className="mt-4 max-w-lg text-sm text-cream/85">
            Quietly luxurious, endlessly wearable — demi-fine gold jewelry made to be lived in.
          </p>
        </div>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-widest2 text-gold">The Velmora Philosophy</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
          Fine jewelry should be lived in, not locked away.
        </h2>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-stone">
          <p>
            Velmora began with a simple belief: that beautiful, well-made jewelry
            shouldn't require a vault. We design demi-fine pieces in 18K
            gold-plated brass, finished by hand and tested for everyday wear — so
            you can treasure them from the first wear to the thousandth.
          </p>
          <p>
            Every piece is hypoallergenic, nickel-free, and backed by a lifetime
            guarantee against plating defects. We ship worldwide, free of charge,
            and offer 30-day returns because we believe you should live with a
            piece before you commit to it.
          </p>
          <p>
            From the studio to your jewelry box, our promise is the same: quietly
            luxurious design, honest materials, and craftsmanship crafted to be
            treasured.
          </p>
        </div>
      </section>
    </div>
  )
}
