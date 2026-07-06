import { useEffect, useRef } from "react"
import { UGC_ITEMS } from "@/data/products"
import { ImageTag } from "@/components/ImageTag"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function UGCReel() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-linen py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-extra-wide text-gold">
              @velmorafine
            </p>
            <h2 className="mt-2 font-serif text-2xl font-normal text-espresso md:text-3xl">
              Styled by You
            </h2>
          </div>
          <a
            href="#"
            className="hidden font-sans text-xs font-medium uppercase tracking-extra-wide text-espresso underline-offset-4 hover:underline md:inline"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 md:gap-4 md:px-6 lg:px-8 scrollbar-hide">
          {UGC_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative w-[160px] shrink-0 overflow-hidden md:w-[200px]"
            >
              <div className="relative aspect-[9/16]">
                <ImageTag
                  id={`ugc-${item.id}`}
                  query={`[ugc-${item.id}-caption]`}
                  ratio="9x16"
                  width={400}
                  alt={item.caption}
                  aspectClass="absolute inset-0 h-full w-full"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                <p
                  id={`ugc-${item.id}-caption`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-tight text-white"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
