import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ugcCards } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/store/SectionHeading.jsx'

const UgcStrip = () => {
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
    <section className="section-padding bg-velvet text-ivory">
      <div className="content-wrap">
        <SectionHeading
          kicker="Seen on you"
          title="A refined take on the reels row"
          description="A soft, social-inspired strip of warm editorial styling moments."
        />

        <div ref={containerRef} className="scrollbar-hidden -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:gap-6">
          {ugcCards.map((card) => {
            const titleId = `ugc-title-${card.id}`
            const captionId = `ugc-caption-${card.id}`

            return (
              <article key={card.id} className="relative min-w-[16rem] overflow-hidden rounded-luxe border border-white/10 bg-white/5 sm:min-w-[18rem]">
                <img
                  alt={card.title}
                  className="aspect-[9/16] w-full object-cover"
                  data-strk-img-id={card.imageId}
                  data-strk-img={`[${captionId}] [${titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velvet to-transparent px-5 pb-5 pt-16">
                  <p id={titleId} className="font-display text-3xl text-ivory">{card.title}</p>
                  <p id={captionId} className="mt-2 text-sm leading-6 text-ivory/80">{card.caption}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default UgcStrip
