import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[92vh] overflow-hidden bg-velmora-espresso text-velmora-pearl">
      <div
        className="absolute inset-0 bg-velmora-espresso"
        data-strk-bg-id="home-hero-bg-gold-jewelry-model-f8c12a"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-velmora-espresso/40 via-velmora-espresso/35 to-velmora-espresso/75" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 md:pb-24">
        <div className="max-w-3xl velmora-fade-in">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Demi-fine gold jewelry</p>
          <h1 id="hero-title" className="mt-5 font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-velmora-pearl sm:text-7xl lg:text-8xl">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-xl text-base leading-8 text-velmora-champagne sm:text-lg">
            Warm, luminous pieces designed for daily rituals, meaningful gifts, and the quiet confidence of gold.
          </p>
          <Link to="/shop" className="mt-9 inline-flex items-center gap-3 rounded-full bg-velmora-gold px-7 py-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso transition duration-300 hover:bg-velmora-pearl hover:shadow-velvet">
            Shop the Collection
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
