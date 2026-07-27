import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

function BrandStorySection() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <section id="story" ref={containerRef} className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-stone-900 shadow-xl shadow-stone-900/10">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora story"
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id="story-image-velmora-a2"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
          />
        </div>

        <div className="space-y-6 text-stone-900">
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Brand story</p>
          <h2 id="story-title" className="font-serif text-5xl leading-none sm:text-6xl">
            Jewelry for the rituals that stay with you
          </h2>
          <p id="story-copy" className="max-w-xl text-base leading-8 text-stone-600">
            Velmora was created to bring a more editorial, elevated feeling to demi-fine
            jewelry — pieces that feel giftable and luxurious without slipping into excess.
            Every silhouette is designed to flatter warm gold tones, layer effortlessly,
            and become part of your everyday signature.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-stone-900 transition hover:text-amber-300"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
