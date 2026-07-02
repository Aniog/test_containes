import React, { useRef, useEffect } from "react"
import { ugcReels } from "@/data/products"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export const UgcReels = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto mb-8 max-w-[1440px] px-6 md:mb-12 md:px-10 lg:px-16">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold">@velmora.jewelry</p>
        <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
          Styled by You
        </h2>
      </div>

      <div ref={containerRef} className="relative">
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 md:gap-5 md:px-10 lg:px-16 scrollbar-hide">
          {ugcReels.map((reel, idx) => (
            <article
              key={reel.id}
              className="group relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden md:w-[280px]"
            >
              <img
                data-strk-img-id={reel.imageId}
                data-strk-img={`[reel-caption-${idx}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width={reel.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  id={`reel-caption-${idx}`}
                  className="font-serif text-lg italic leading-snug text-white"
                >
                  {reel.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
