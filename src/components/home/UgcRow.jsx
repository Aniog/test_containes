import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ugcItems } from "@/data/products"

export function UgcRow() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-20 lg:py-28">
      <div className="mb-10 px-6 text-center lg:px-8">
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
          @velmorajewelry
        </p>
        <h2 className="font-serif text-3xl font-light uppercase tracking-[0.12em] text-velmora-charcoal md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-4 lg:gap-6 lg:px-8">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[9/16] w-[220px] flex-shrink-0 overflow-hidden md:w-[260px]"
          >
            <div
              data-strk-bg-id={item.imgId}
              data-strk-bg={`[ugc-caption-${item.id}]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
              role="img"
              aria-label={item.caption}
              className="absolute inset-0 bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                id={`ugc-caption-${item.id}`}
                className="font-serif text-lg italic text-velmora-cream"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
