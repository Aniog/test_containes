import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

const HeroVisual = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let dispose

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)

      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [])

  return (
    <section ref={containerRef} className="bg-velvet px-4 pb-6 pt-28 md:px-6 md:pb-10 md:pt-32">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-luxe border border-white/10 shadow-floating">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-strk-bg-id="hero-bg-velmora-4a98ec"
            data-strk-bg="[hero-subhead] [hero-headline]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-velvet via-velvet/70 to-velvet/20" />
          <div className="relative min-h-[34rem] px-6 py-10 sm:min-h-[40rem] sm:px-10 md:min-h-[46rem] lg:max-w-2xl lg:px-14 lg:py-16">
            <p id="hero-overline" className="editorial-kicker text-ivory/70">Demi-fine essentials</p>
            <h1 id="hero-headline" className="mt-6 max-w-xl text-5xl leading-none text-ivory sm:text-6xl md:text-7xl">
              Crafted to be Treasured
            </h1>
            <p id="hero-subhead" className="mt-6 max-w-md text-sm leading-7 text-ivory/80 md:text-base">
              Premium demi-fine jewelry designed for gifting, layering, and the quiet confidence of everyday polish.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="button-primary">
                Shop the Collection
              </Link>
              <a href="/#story" className="button-secondary border-white/20 text-ivory hover:border-champagne hover:text-ivory">
                Discover the Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroVisual
