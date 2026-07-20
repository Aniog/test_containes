import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function BrandStory() {
  const storyRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, storyRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [])

  return (
    <section ref={storyRef} id="story" className="bg-velmora-parchment px-5 py-20 text-velmora-espresso md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div
          className="aspect-[4/5] overflow-hidden border border-velmora-mist bg-velmora-ivory bg-cover bg-center shadow-editorial"
          role="img"
          aria-label="Velmora jewelry atelier details"
          data-strk-bg-id="brand-story-atelier-p8q4r2"
          data-strk-bg="[brand-story-copy] [brand-story-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1000"
        />
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">Our point of view</p>
          <h2 id="brand-story-title" className="mt-4 font-serif text-5xl leading-[0.95] text-velmora-espresso md:text-7xl">Jewelry with the feeling of an heirloom, made for now.</h2>
          <p id="brand-story-copy" className="mt-7 max-w-xl text-base leading-8 text-velmora-cocoa/82">Velmora was created for women who collect meaning in small, beautiful details. Our demi-fine pieces balance warm 18K gold plating, skin-friendly materials, and refined silhouettes at a price that still feels considered.</p>
          <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-antique pb-1 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-antique">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
