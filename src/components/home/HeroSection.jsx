import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, heroRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-ivory">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.72]"
        data-strk-bg-id="home-hero-bg-l7m2n9"
        data-strk-bg="[hero-subhead] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/45 via-velmora-espresso/35 to-velmora-espresso/85" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8 md:pb-24 lg:px-12">
        <div className="max-w-3xl animate-soft-rise">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="font-serif text-6xl leading-[0.92] tracking-tight text-velmora-ivory md:text-8xl lg:text-9xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subhead" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/82 md:text-lg">
            Warm, luminous pieces made for daily rituals, intimate gifting, and the quiet confidence of gold.
          </p>
          <Link to="/shop" className="mt-9 inline-flex bg-velmora-champagne px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition duration-300 hover:bg-velmora-antique hover:text-velmora-ivory">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
