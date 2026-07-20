import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ugcReels } from '@/data/ugc'
import { ProductImage } from '@/components/ui/ProductImage'

export default function UgcReels() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              Styled by You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">@velmora</h2>
          </div>
          <a
            href="#"
            className="hidden text-sm font-medium underline underline-offset-4 transition-colors hover:text-velmora-gold md:block"
          >
            Follow Along
          </a>
        </div>
      </div>

      <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4 md:gap-6 md:px-8">
        {ugcReels.map((reel) => {
          const titleId = `ugc-title-${reel.id}`
          const captionId = `ugc-caption-${reel.id}`
          return (
            <article
              key={reel.id}
              className="group relative w-40 flex-shrink-0 md:w-56"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-velmora-charcoal">
                <ProductImage
                  id={captionId}
                  imgId={`ugc-${reel.id}`}
                  query={`[${captionId}] [${titleId}]`}
                  ratio="9x16"
                  width="500"
                  alt={`Styled by ${reel.handle}`}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p
                    id={titleId}
                    className="text-xs font-medium uppercase tracking-widest"
                  >
                    {reel.handle}
                  </p>
                  <p
                    id={captionId}
                    className="mt-1 font-serif text-sm italic"
                  >
                    {reel.caption}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
