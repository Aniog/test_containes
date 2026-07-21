import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../../strk-img-config.json"
import { reelItems } from "../../data/products"

export default function ReelStrip() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="bg-ink py-20 text-bone md:py-28" ref={ref}>
      <div className="mx-auto max-w-editorial px-6 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-100">@velmora · in the wild</p>
            <h2 className="mt-3 font-serif text-4xl text-bone md:text-5xl">
              Worn in the everyday.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/65">
            Tag us to be featured. Our community wears Velmora from morning espresso to evening candlelight.
          </p>
        </div>
      </div>

      <div className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-6 md:gap-5 md:px-10">
        {reelItems.map((item) => (
          <article
            key={item.id}
            className="group relative w-[58vw] flex-shrink-0 snap-start sm:w-[260px] md:w-[280px]"
            style={{ aspectRatio: "9 / 16" }}
          >
            <div className="absolute inset-0 luxury-tone overflow-hidden">
              <img
                alt=""
                aria-hidden="true"
                data-strk-img-id={item.imgId}
                data-strk-img={item.imgQuery}
                data-strk-img-ratio="9x16"
                data-strk-img-width="540"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(26,18,11,0) 50%, rgba(26,18,11,0.75) 100%)",
              }}
            />
            <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
              <p
                id={item.captionId}
                className="font-serif text-2xl leading-tight text-bone md:text-[26px]"
              >
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
